package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	authpb "qiji/src/service/auth/api/gen/v1"
	messagepb "qiji/src/service/message/api/gen/v1"
	userpb "qiji/src/service/user/api/gen/v1"
	"qiji/src/shared/server"
	"strings"

	"github.com/namsral/flag"
	"github.com/rs/cors"
	"google.golang.org/protobuf/proto"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/encoding/gzip"
	"google.golang.org/protobuf/encoding/protojson"
)

type StandardResponse struct {
	Code    int         `json:"code"`
	Data    interface{} `json:"data"`
	Message string      `json:"message"`
}

const (
	proxyFlag = "__success__"
)

var httpAddr = flag.String("http_addr", ":8888", "address to listen")
var msgAddr = flag.String("msg_addr", "localhost:8081", "address for message service")
var userAddr = flag.String("user_addr", "localhost:8082", "address for user service")
var authAddr = flag.String("auth_addr", "localhost:8083", "address for auth service")

func CustomMatcher(key string) (string, bool) {
	switch key {
	// 阻止 grpcgateway-authorization下传到metadata，减少带宽消耗（使用authorization）
	case "Authorization":
		return key, false
	default:
		return runtime.DefaultHeaderMatcher(key)
	}
}

func isHeaderAllowed(s string) (string, bool) {

	fmt.Printf("to http header: %v\n", s)
	return s, true
}

func HttpResponseHandler(c context.Context, w http.ResponseWriter, p proto.Message) error {
	w.Header().Set("Accept-Encoding", "gzip")

	resp := StandardResponse{
		Code:    0,
		Data:    p,
		Message: "",
	}
	bs, _ := json.Marshal(&resp)
	return errors.New(proxyFlag + string(bs))
}

func HttpErrorHandler(ctx context.Context, mux *runtime.ServeMux, m runtime.Marshaler, w http.ResponseWriter, r *http.Request, err error) {
	// success proxy
	raw := err.Error()
	if strings.HasPrefix(raw, proxyFlag) {
		raw = raw[len(proxyFlag):]
		w.Write([]byte(raw))
		return
	}

	runtime.DefaultHTTPErrorHandler(ctx, mux, m, w, r, err)
}

func main() {
	flag.Parse()

	logger, err := server.NewZapLogger()
	if err != nil {
		log.Fatalf("实例化logger失败: %v", err)
	}

	c := context.Background()
	ctx, cancel := context.WithCancel(c)
	defer cancel()

	mux := runtime.NewServeMux(
		// json序列化规则
		runtime.WithMarshalerOption(runtime.MIMEWildcard, &runtime.JSONPb{
			MarshalOptions: protojson.MarshalOptions{
				UseEnumNumbers: true,
				UseProtoNames:  true,
			},
		}),
		// http to grpc
		runtime.WithIncomingHeaderMatcher(CustomMatcher),
		// grpc to http
		runtime.WithOutgoingHeaderMatcher(isHeaderAllowed),
		// 修改响应头
		// 修改响应结构体（借用ErrorHandler）
		runtime.WithForwardResponseOption(HttpResponseHandler),
		runtime.WithErrorHandler(HttpErrorHandler),
	)

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
		{
			name:         "auth",
			addr:         *authAddr,
			registerFunc: authpb.RegisterAuthServiceHandlerFromEndpoint,
		},
	}

	for _, v := range serverConfigs {
		err := v.registerFunc(ctx, mux, v.addr, []grpc.DialOption{grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithDefaultCallOptions(grpc.UseCompressor(gzip.Name))})
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
