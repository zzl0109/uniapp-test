package message

import (
	"context"
	"fmt"
	messagepb "qiji/src/service/message/api/gen/v1"
	"qiji/src/service/message/dao"
	"time"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Service struct {
	Mysql *dao.Mysql
}

func (s *Service) StreamMessage(srv messagepb.MessageService_StreamMessageServer) error {
	for {
		recv, err := srv.Recv()
		if err != nil {
			return err
		}
		fmt.Println("Received message:", recv.GetName())
		if err := srv.Send(&messagepb.StreamMessageResponse{
			Message: fmt.Sprint("Received message:", recv.GetName()),
		}); err != nil {
			return err
		}
	}
}

func (s *Service) GetMessageList(c context.Context, req *messagepb.GetMessageListSerivce_Request) (*messagepb.GetMessageListSerivce_Response, error) {
	// err := s.Mysql.CreateGroup()
	// if err != nil {
	// 	return nil, err
	// }

	return &messagepb.GetMessageListSerivce_Response{
		MessageList: []*messagepb.Message{{}},
	}, nil
}

func (s *Service) GetSessionList(c context.Context, req *messagepb.GetSessionListService_Request) (*messagepb.GetSessionListService_Response, error) {
	g, err := s.Mysql.GetGroups()

	if err != nil {
		return nil, status.Error(codes.InvalidArgument, "找不到群组信息")
	}

	var sessionList []*messagepb.GetSessionListService_SessionInfo
	for _, v := range g {
		sessionList = append(sessionList, &messagepb.GetSessionListService_SessionInfo{
			Id:          int32(v.ID),
			Name:        v.Name,
			SessionType: messagepb.SessionType_group,
		})
	}

	return &messagepb.GetSessionListService_Response{
		SessionList: sessionList,
	}, nil
}

func (s *Service) SendMessage(srv messagepb.MessageService_SendMessageServer) error {
	for {
		recv, err := srv.Recv()
		if err != nil {
			return err
		}
		fmt.Println("Received message:", recv.Content)
		if err := srv.Send(&messagepb.Message{
			Content:        recv.Content,
			SenderId:       1,
			SendTimeSecond: int32(time.Now().Unix()),
		}); err != nil {
			return err
		}
	}
}
