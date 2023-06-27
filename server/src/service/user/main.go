package main

import (
	"io"
	"log"
	"os"
	userpb "qiji/src/service/user/api/gen/v1"
	"qiji/src/service/user/dao"
	token "qiji/src/service/user/token"
	"qiji/src/service/user/user"
	"qiji/src/shared/server"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/namsral/flag"
	"go.uber.org/zap"
	"google.golang.org/grpc"
)

var addr = flag.String("addr", ":8082", "address to listen")
var mysqlAddr = flag.String("mysql_addr", "118.89.93.58:3306", "mysql address")
var privateKeyFile = flag.String("private_key_file", "src/service/user/private.key", "private key file")
var publicKeyFile = flag.String("public_key_file", "src/service/user/public.key", "public key file")

func main() {
	flag.Parse()

	logger, err := server.NewZapLogger()
	if err != nil {
		log.Fatalf("实例化logger失败: %v", err)
	}

	userDao := dao.NewMysql(*mysqlAddr)

	f, openFileErr := os.Open(*privateKeyFile)
	if openFileErr != nil {
		logger.Fatal("打开私钥文件失败 ", zap.Error(openFileErr))
	}
	privateKeyBytes, readerErr := io.ReadAll(f)
	if readerErr != nil {
		logger.Fatal("读取私钥文件失败 ", zap.Error(openFileErr))

	}
	pKey, parseErr := jwt.ParseRSAPrivateKeyFromPEM(privateKeyBytes)
	if parseErr != nil {
		logger.Fatal("转换私钥失败 %v", zap.Error(parseErr))
	}
	tokenGenerator := token.NewJwtTokenGen("qiji/user", pKey)

	runGrpcErr := server.RunGrpcServer(&server.GrpcConfig{
		Name:                  "user",
		Addr:                  *addr,
		Logger:                logger,
		AuthPublicKeyFilePath: *publicKeyFile,
		RegisterFunc: func(server *grpc.Server) {
			userpb.RegisterUserServiceServer(server, &user.Service{
				Mysql:          userDao,
				TokenExpire:    time.Hour * 24 * 365,
				TokenGenerator: tokenGenerator,
			})
		},
	})

	if runGrpcErr != nil {
		logger.Fatal("启动服务失败 %v", zap.Error(runGrpcErr))
	}
}
