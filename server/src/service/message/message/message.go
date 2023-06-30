package message

import (
	"context"
	"fmt"
	messagepb "qiji/src/service/message/api/gen/v1"
	"qiji/src/service/message/dao"
	"qiji/src/service/message/ws/messageCenter"
	"qiji/src/shared/id"
	"qiji/src/util"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

type Service struct {
	Mysql         *dao.Mysql
	MessageCenter *messageCenter.MessageCenter
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

func (s *Service) GetMessageList(c context.Context, req *messagepb.GetMessageListService_Request) (*messagepb.GetMessageListService_Response, error) {
	res, err := s.Mysql.GetMessageList(req)
	if err != nil {
		return nil, err
	}

	return res, nil
}

func (s *Service) GetSession(c context.Context, req *messagepb.GetSessionRequest) (*messagepb.GetSessionResponse, error) {
	group, err := s.Mysql.GetGroup(req.Id)
	if err != nil {
		return nil, err
	}

	return &messagepb.GetSessionResponse{
		Session: &messagepb.GetSessionListService_SessionInfo{
			Id:          int32(group.ID),
			Name:        group.Name,
			SessionType: messagepb.SessionType_group,
		},
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
	// 从 Context 中提取额外参数
	metadata, ok := metadata.FromIncomingContext(srv.Context())
	if !ok {
		return fmt.Errorf("failed to get extra parameter from Context")
	}

	var sessionId id.SessionId
	params := metadata.Get(util.SessionIdKey)
	if len(params) == 0 {
		return fmt.Errorf("无sessionId")
	}
	sessionId = id.SessionId(params[0])
	fmt.Printf("metadata %v \n", sessionId)

	go func() {
		if s.MessageCenter == nil {
			fmt.Printf("消息中心为空 \n")
			return
		}
		done := make(chan struct{})
		msgs, cleanUp, err := s.MessageCenter.Subscribe(context.Background(), sessionId)
		if err != nil {
			fmt.Printf("订阅失败，%v \n", err)
			cleanUp()
			return
		}

		for {
			select {
			case msg := <-msgs:
				if err := srv.Send(msg); err != nil {
					fmt.Printf("stream server发送消息失败 %v", err)
					done <- struct{}{}
				}
			case <-done:
				cleanUp()
				return
			case <-srv.Context().Done():
				cleanUp()
				return
			}
		}

	}()

	for {
		if s.MessageCenter == nil {
			fmt.Printf("消息中心为空 \n")
			return fmt.Errorf("消息中心为空")
		}
		recv, err := srv.Recv()

		if err != nil {
			fmt.Printf("stream消息接受失败：%v \n", err)
			return err
		}

		msg, err := s.Mysql.WriteMessage(recv)
		if err != nil {
			fmt.Printf("消息写入失败：%v \n", err)
			return err
		}

		err = s.MessageCenter.Publish(context.Background(), sessionId, msg)

		if err != nil {
			fmt.Printf("推送消息失败 %v \n", err)
			return err
		}
	}
}
