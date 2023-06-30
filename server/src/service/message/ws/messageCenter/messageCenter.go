package messageCenter

import (
	"context"
	"encoding/json"
	"fmt"
	messagepb "qiji/src/service/message/api/gen/v1"
	"qiji/src/shared/id"

	"github.com/streadway/amqp"
	"go.uber.org/zap"
)

type MessageCenter struct {
	Exchange     string
	ExchangeType string
	// RoutingKey   string
	Connection *amqp.Connection
	// Channel    *amqp.Channel
	Logger *zap.Logger
}

func NewMessageCenter(addr string, logger *zap.Logger) (*MessageCenter, error) {
	conn, err := amqp.Dial(addr)
	if err != nil {
		fmt.Printf("连接mq失败： %v； \n", err)
		return nil, err
	}

	return &MessageCenter{
		Exchange:     "qiji/message_center",
		ExchangeType: "direct",
		Connection:   conn,
		Logger:       logger,
	}, nil
}

func (m *MessageCenter) Publish(c context.Context, sessionId id.SessionId, message *messagepb.Message) error {
	b, err := json.Marshal(message)
	if err != nil {
		return fmt.Errorf("转换message失败 %v", err)
	}

	ch, err := m.Connection.Channel()
	if err != nil {
		return fmt.Errorf("分配channel失败 %v", err)
	}

	return ch.Publish(m.Exchange, getRoutingKey(sessionId), false, false, amqp.Publishing{
		Body: b,
	})
}

func (m *MessageCenter) Subscribe(c context.Context, sessionId id.SessionId) (chan *messagepb.Message, func(), error) {
	closeCh := func() {}
	ch, err := m.Connection.Channel()
	if err != nil {
		return nil, closeCh, fmt.Errorf("分配channel失败 %v", err)
	}
	closeCh = func() {
		err := ch.Close()
		if err != nil {
			m.Logger.Error("关闭channel失败 %v", zap.Error(err))
		}
	}

	err = declareExchange(ch, "qiji/message_center", "direct")
	if err != nil {
		m.Logger.Info("声明exchange失败", zap.Error(err))
		return nil, closeCh, fmt.Errorf("声明exchange %v", err)
	}

	q, err := ch.QueueDeclare("", false, true, false, false, nil)
	if err != nil {
		return nil, closeCh, fmt.Errorf("声明队列失败 %v", err)
	}

	cleanUp := func() {
		_, err := ch.QueueDelete(q.Name, false, false, false)
		if err != nil {
			m.Logger.Error("删除队列失败", zap.String("name", q.Name), zap.Error(err))
		}

		closeCh()
	}

	err = ch.QueueBind(q.Name, getRoutingKey(sessionId), m.Exchange, false, nil)
	if err != nil {
		return nil, cleanUp, fmt.Errorf("绑定失败 %v", err)
	}

	mqMsgs, err := ch.Consume(q.Name, "", true, false, false, false, nil)
	if err != nil {
		return nil, cleanUp, fmt.Errorf("消费队列失败 %v", err)
	}

	messageCh := make(chan *messagepb.Message)

	go func() {
		for msg := range mqMsgs {
			var message messagepb.Message
			if len(msg.Body) == 0 {
				fmt.Printf("rabbitmq msg is nil")
				return
			}
			err := json.Unmarshal(msg.Body, &message)
			if err != nil {
				m.Logger.Error("转换失败 %v", zap.Error(err))
			}

			messageCh <- &message
		}

		close(messageCh)
	}()

	return messageCh, cleanUp, nil
}

func declareExchange(ch *amqp.Channel, exchange string, exchangeType string) error {
	return ch.ExchangeDeclare(exchange, exchangeType, true, false, false, false, nil)
}
func getRoutingKey(sessionId id.SessionId) string {
	return fmt.Sprintf("group%v", sessionId)
}
