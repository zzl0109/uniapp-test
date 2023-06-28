package user

import (
	"context"
	userpb "qiji/src/service/user/api/gen/v1"
	"qiji/src/service/user/dao"
	"qiji/src/shared/auth"
	mysqlConst "qiji/src/shared/mysql"

	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Service struct {
	Mysql  *dao.Mysql
	Logger *zap.Logger
}

func (s *Service) GetUser(c context.Context, req *userpb.GetUserService_Request) (*userpb.UserEntity, error) {
	uid, err := auth.UserIdFromContext(c)
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, "无效token")
	}
	ue, err := s.Mysql.GetUser(int(uid))
	if err != nil {
		if mysqlConst.IsNotFound(err) {
			return nil, status.Error(codes.NotFound, "找不到用户信息")
		}
		return nil, status.Error(codes.Internal, err.Error())
	}
	return ue, nil
}
