package ws

import (
	"context"
	"encoding/json"
	"net/http"
	messagepb "qiji/src/service/message/api/gen/v1"

	websocket "github.com/gorilla/websocket"
	"go.uber.org/zap"
)

func Handler(u *websocket.Upgrader, messageClient messagepb.MessageServiceClient, logger *zap.Logger) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		query := r.URL.Query()
		sessionId := query.Get("session_id")

		logger.Info("socket server started", zap.Any("sessionId", sessionId))
		c, err := u.Upgrade(w, r, nil)
		if err != nil {
			logger.Warn("升级websocket失败", zap.Error(err))
			return
		}
		defer c.Close()

		ms, err := messageClient.SendMessage(context.Background())
		if err != nil {
			logger.Error("建立流式服务通道失败", zap.Error(err))
			return
		}

		done := make(chan struct{})
		msgs := make(chan interface{})
		go func() {
			for {
				_, p, err := c.ReadMessage()
				if err != nil {
					if !websocket.IsCloseError(err, websocket.CloseGoingAway, websocket.CloseNormalClosure) {
						logger.Warn("异常错误", zap.Error(err))
					}
					done <- struct{}{}
					break
				}

				logger.Info("收到消息 %s", zap.String("msg", string(p)))
				var message messagepb.SendMessageService_Request
				json.Unmarshal(p, &message)

				err = ms.Send(&messagepb.SendMessageService_Request{
					Content:     message.Content,
					SessionId:   message.SessionId,
					SessionType: message.SessionType,
				})
				if err != nil {
					logger.Error("流式服务发送消息失败", zap.Error(err))
				}

			}
		}()

		go func() {
			for {
				smr, err := ms.Recv()
				if err != nil {
					logger.Error("接收流式消息失败", zap.Error(err))
				}

				msgs <- smr
			}
		}()

		for {
			select {
			case msg := <-msgs:
				err := c.WriteJSON(msg)
				if err != nil {
					logger.Warn("信息写入失败", zap.Error(err))
				}
			case <-done:
				return
			}
		}

	}

}
