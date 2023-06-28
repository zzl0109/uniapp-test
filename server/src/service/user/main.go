package main

import (
	"log"
	userpb "qiji/src/service/user/api/gen/v1"
	"qiji/src/service/user/dao"
	"qiji/src/service/user/user"
	"qiji/src/shared/server"

	"github.com/namsral/flag"
	"go.uber.org/zap"
	"google.golang.org/grpc"
)

var addr = flag.String("addr", ":8082", "address to listen")
var mysqlAddr = flag.String("mysql_addr", "118.89.93.58:3306", "mysql address")
var authPublicKeyFile = flag.String("auth_public_key_file", "src/service/auth/public.key", "auth public key file")

func main() {
	flag.Parse()

	logger, err := server.NewZapLogger()
	if err != nil {
		log.Fatalf("实例化logger失败: %v", err)
	}

	userDao := dao.NewMysql(*mysqlAddr)

	runGrpcErr := server.RunGrpcServer(&server.GrpcConfig{
		Name:                  "user",
		Addr:                  *addr,
		Logger:                logger,
		AuthPublicKeyFilePath: *authPublicKeyFile,
		RegisterFunc: func(server *grpc.Server) {
			userpb.RegisterUserServiceServer(server, &user.Service{
				Mysql:  userDao,
				Logger: logger,
			})
		},
	})

	if runGrpcErr != nil {
		logger.Fatal("启动服务失败 %v", zap.Error(runGrpcErr))
	}
}
