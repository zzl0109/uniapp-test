package auth

import (
	"context"
	"qiji/src/shared/auth/token"
	"qiji/src/shared/id"
	"strconv"

	"fmt"
	"io"
	"os"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

type tokenVerifier interface {
	Verify(token string) (string, error)
}

type interceptor struct {
	verifier tokenVerifier
}

const (
	authorizationHeader = "authorization"
	bearerPrefix        = "Bearer "
)

func Interceptor(publicKeyPath string) (grpc.UnaryServerInterceptor, error) {
	f, openFileErr := os.Open(publicKeyPath)
	if openFileErr != nil {
		return nil, fmt.Errorf("打开公钥文件失败 %v", openFileErr)
	}

	publicKeyBytes, readerErr := io.ReadAll(f)
	if readerErr != nil {
		return nil, fmt.Errorf("读取公钥文件失败 %v", readerErr)
	}

	publicKey, parseErr := jwt.ParseRSAPublicKeyFromPEM(publicKeyBytes)
	if parseErr != nil {
		return nil, fmt.Errorf("转换公钥文件失败 %v", parseErr)
	}

	i := &interceptor{
		verifier: &token.JwtTokenVerifier{
			PublicKey: publicKey,
		},
	}
	return i.HandleReq, nil
}

func (i *interceptor) HandleReq(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (resp interface{}, err error) {
	token, err := getTokenFromContext(ctx)
	// fmt.Printf("token: %s \n", token)
	if err != nil {
		return nil, status.Error(codes.Unauthenticated, "")
	}

	userIdStr, verifyErr := i.verifier.Verify(token)
	// fmt.Printf("uid from token: %s \n", userId)
	userId, err := strconv.Atoi(userIdStr)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	if verifyErr != nil {
		return nil, status.Errorf(codes.Unauthenticated, "token 过期 %v", verifyErr)
	}

	return handler(ContextWithUserId(ctx, id.UserId(userId)), req)
}

func getTokenFromContext(c context.Context) (string, error) {
	unauthenticated := status.Error(codes.Unauthenticated, "")
	m, ok := metadata.FromIncomingContext(c)
	if !ok {
		return "", unauthenticated
	}

	token := ""
	for _, v := range m[authorizationHeader] {
		if strings.HasPrefix(v, bearerPrefix) {
			token = v[len(bearerPrefix):]
		}
	}

	if token == "" {
		return "", unauthenticated
	}

	return token, nil
}

type userIdKey struct{}

// with userId
func ContextWithUserId(c context.Context, userId id.UserId) context.Context {
	return context.WithValue(c, userIdKey{}, userId)
}

// return (userId, Unauthenticated status)
func UserIdFromContext(c context.Context) (id.UserId, error) {
	v := c.Value(userIdKey{})
	userId, ok := v.(id.UserId)
	if !ok {
		return 0, status.Error(codes.Unauthenticated, "")
	}
	return userId, nil
}
