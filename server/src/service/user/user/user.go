package user

import (
	"context"
	userpb "qiji/src/service/user/api/gen/v1"
	"qiji/src/service/user/dao"
	mysqlConst "qiji/src/shared/mysql"
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

func (s *Service) CreateUser(c context.Context, req *userpb.CreateUserService_Request) (*userpb.UserEntity, error) {
	ue, err := s.Mysql.CreateUser(req.User)
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}
	return ue, nil
}

func (s *Service) Login(c context.Context, req *userpb.CreateUserService_Request) (*userpb.LoginService_Response, error) {
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

	updateRecord := &userpb.User{
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

	return &userpb.LoginService_Response{
		Token: updateRecord.Token,
	}, nil
}

func (s *Service) GetUser(c context.Context, req *userpb.GetUserService_Request) (*userpb.UserEntity, error) {
	ue, err := s.Mysql.GetUser(int(req.Id))
	if err != nil {
		if mysqlConst.IsNotFound(err) {
			return nil, status.Error(codes.NotFound, "找不到用户信息")
		}
		return nil, status.Error(codes.Internal, err.Error())
	}
	return ue, nil
}
