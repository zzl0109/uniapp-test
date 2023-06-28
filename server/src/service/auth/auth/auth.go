package auth

import (
	"context"
	authpb "qiji/src/service/auth/api/gen/v1"
	"qiji/src/service/auth/dao"
	"time"

	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Service struct {
	Mysql          *dao.Mysql
	TokenExpire    time.Duration
	TokenGenerator TokenGenerator
	Logger         *zap.Logger
}

type TokenGenerator interface {
	GenerateToken(userId int, expire time.Duration) (string, error)
}

func (s *Service) Login(c context.Context, req *authpb.LoginService_Request) (*authpb.LoginService_Response, error) {
	var userId int

	newRecord, err := s.Mysql.CreateUser(req.User)
	if newRecord.User.Token == "" {
		userId = int(newRecord.Id)
	} else {
		return nil, status.Error(codes.Internal, err.Error())
	}
	token, err := s.TokenGenerator.GenerateToken(userId, s.TokenExpire)
	if err != nil {
		return nil, status.Error(codes.Internal, "生成token失败")
	}

	updateRecord := &authpb.User{
		Token: token,
	}
	err = s.Mysql.UpdateUser(updateRecord, userId)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	go func() {
		err := s.Mysql.HandleAddUserToGroups(context.Background(), userId)
		if err != nil {
			s.Logger.Error("关联群组失败", zap.Any("用户", userId))
		}
	}()

	return &authpb.LoginService_Response{
		Token: updateRecord.Token,
	}, nil
}
