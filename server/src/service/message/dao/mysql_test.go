package dao

import (
	"encoding/json"
	"fmt"
	"log"
	messagepb "qiji/src/service/message/api/gen/v1"
	mysqlConst "qiji/src/shared/mysql"
	"testing"
)

func TestWriteMessage(t *testing.T) {

	m := NewMysql(mysqlConst.TestHost)
	msg, err := m.WriteMessage(&messagepb.SendMessageService_Request{
		Content:     "hello",
		SenderId:    1,
		SessionType: messagepb.SessionType_group,
		SessionId:   2,
	})
	if err != nil {
		log.Fatal("写入失败", err)
	}
	fmt.Printf("msg %v", msg)
}

func TestGetMessageList(t *testing.T) {

	m := NewMysql(mysqlConst.TestHost)
	msgList, err := m.GetMessageList(&messagepb.GetMessageListService_Request{
		SessionId: 1,
		MessageId: 0,
		Direction: messagepb.MessageQueryDirection_after,
	})
	if err != nil {
		t.Fatal("获取失败", err)
	}
	var contentList []string
	for _, v := range msgList.MessageList {
		contentList = append(contentList, v.Content)
	}
	b, err := json.Marshal(contentList)
	if err != nil {
		t.Fatalf("转换失败 %v", err)
	}
	t.Errorf("msg %v", string(b))
}

func TestGetSession(t *testing.T) {

	m := NewMysql(mysqlConst.TestHost)
	group, err := m.GetGroup(2)
	if err != nil {
		t.Fatal("获取失败", err)
	}
	b, err := json.Marshal(group)
	if err != nil {
		t.Fatalf("转换失败 %v", err)
	}
	t.Errorf("msg %v", string(b))
}
