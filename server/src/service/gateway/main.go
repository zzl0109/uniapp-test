package main

import (
	"context"
	"log"
	"net/http"
	messagepb "qiji/src/service/message/api/gen/v1"
	userpb "qiji/src/service/user/api/gen/v1"
	"qiji/src/shared/server"

	"github.com/namsral/flag"
	"github.com/rs/cors"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/protobuf/encoding/protojson"
)

var httpAddr = flag.String("http_addr", ":8888", "address to listen")
var msgAddr = flag.String("msg_addr", "localhost:8081", "address for message service")
var userAddr = flag.String("user_addr", "localhost:8082", "address for user service")

func main() {
	flag.Parse()

	logger, err := server.NewZapLogger()
	if err != nil {
		log.Fatalf("实例化logger失败: %v", err)
	}

	c := context.Background()
	ctx, cancel := context.WithCancel(c)
	defer cancel()

	mux := runtime.NewServeMux(runtime.WithMarshalerOption(runtime.MIMEWildcard, &runtime.JSONPb{
		MarshalOptions: protojson.MarshalOptions{
			UseEnumNumbers: true,
			UseProtoNames:  true,
		},
	}))

	serverConfigs := []struct {
		name         string
		addr         string
		registerFunc func(ctx context.Context, mux *runtime.ServeMux, endpoint string, opts []grpc.DialOption) (err error)
	}{
		{
			name:         "message",
			addr:         *msgAddr,
			registerFunc: messagepb.RegisterMessageServiceHandlerFromEndpoint,
		},
		{
			name:         "user",
			addr:         *userAddr,
			registerFunc: userpb.RegisterUserServiceHandlerFromEndpoint,
		},
	}

	for _, v := range serverConfigs {
		err := v.registerFunc(ctx, mux, v.addr, []grpc.DialOption{grpc.WithTransportCredentials(insecure.NewCredentials())})
		nameField := zap.String("name", v.name)

		if err != nil {
			logger.Fatal("gateway服务 启动失败：", nameField, zap.Error(err))
		}
	}

	// Create a CORS middleware handler
	corsHandler := cors.AllowAll().Handler

	// Add the CORS middleware to the grpc-gateway handler
	handler := corsHandler(mux)

	logger.Info("http服务已启动", zap.String("addr", *httpAddr))

	// http.Handle("/", handler)
	listenerErr := http.ListenAndServe(*httpAddr, handler)
	if listenerErr != nil {
		logger.Fatal("监听端口失败 ", zap.String("httpAddr", *httpAddr), zap.Error(listenerErr))
	}

	// http.Handle("/", mux)
	// lg.Sugar().Infof("grpc gateway started at %s", *addr)
	// lg.Sugar().Fatal(http.ListenAndServe(*addr, nil))
}
