package main

import (
	"log"
	"net/http"
	messagepb "qiji/src/service/message/api/gen/v1"
	"qiji/src/service/message/dao"
	"qiji/src/service/message/message"
	"qiji/src/service/message/ws"
	"qiji/src/shared/server"

	"github.com/gorilla/websocket"
	"github.com/namsral/flag"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var addr = flag.String("addr", ":8081", "address to listen")
var wsAddr = flag.String("ws_url", ":9090", "address for websocket")
var authPublicKeyFile = flag.String("auth_public_key_file", "src/service/auth/public.key", "auth public key file")
var mysqlAddr = flag.String("mysql_addr", "118.89.93.58:3306", "mysql address")

func main() {
	flag.Parse()

	logger, err := server.NewZapLogger()
	if err != nil {
		log.Fatalf("实例化logger失败: %v", err)
	}

	// 开启websocket
	u := &websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}

	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		logger.Error("实例化messageClient失败", zap.Error(err))
	}
	messageClient := messagepb.NewMessageServiceClient(conn)

	http.HandleFunc("/chat", ws.Handler(u, messageClient, logger))
	go func() {
		logger.Info("websocket服务已启动", zap.String("addr", *wsAddr))
		err := http.ListenAndServe(*wsAddr, nil)
		if err != nil {
			logger.Fatal("启动websocket服务失败 %v", zap.Error(err))
		}
	}()

	runGrpcErr := server.RunGrpcServer(&server.GrpcConfig{
		Name:                  "message",
		Addr:                  *addr,
		Logger:                logger,
		AuthPublicKeyFilePath: *authPublicKeyFile,
		RegisterFunc: func(server *grpc.Server) {
			messagepb.RegisterMessageServiceServer(server, &message.Service{
				Mysql: dao.NewMysql(*mysqlAddr),
			})
		},
	})

	if runGrpcErr != nil {
		logger.Fatal("启动服务失败 %v", zap.Error(runGrpcErr))
	}
}
