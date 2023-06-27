package server

import (
	"net"
	"qiji/src/shared/auth"

	"go.uber.org/zap"
	"google.golang.org/grpc"
)

type GrpcConfig struct {
	Name                  string
	Addr                  string
	AuthPublicKeyFilePath string
	RegisterFunc          func(*grpc.Server)
	Logger                *zap.Logger
}

func RunGrpcServer(c *GrpcConfig) error {
	nameField := zap.String("name", c.Name)
	l, err2 := net.Listen("tcp", c.Addr)
	if err2 != nil {
		c.Logger.Fatal("监听tcp端口失败 ", nameField, zap.String("addr", c.Addr), zap.Error(err2))
	}

	var opts []grpc.ServerOption
	if c.AuthPublicKeyFilePath != "" {
		in, interceptErr := auth.Interceptor(c.AuthPublicKeyFilePath)
		if interceptErr != nil {
			c.Logger.Fatal("创建auth拦截器失败 ", nameField, zap.Error(interceptErr))
		}
		opts = append(opts, grpc.UnaryInterceptor(in))
	}

	server := grpc.NewServer(opts...)
	c.RegisterFunc(server)

	c.Logger.Info("tcp服务已启动", nameField, zap.String("addr", c.Addr))
	return server.Serve(l)
}
