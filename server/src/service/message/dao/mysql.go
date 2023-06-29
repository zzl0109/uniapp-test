package dao

import (
	"fmt"
	"qiji/src/model"
	messagepb "qiji/src/service/message/api/gen/v1"
	mysqlConst "qiji/src/shared/mysql"

	"gorm.io/gorm"
)

type Mysql struct {
	db *gorm.DB
}

const (
	MessageListLimit = 20
)

func NewMysql(host string) *Mysql {
	db := mysqlConst.NewDB(host)
	err := db.AutoMigrate(&model.Group{})
	if err != nil {
		fmt.Printf("group表构建失败: %s", err)
	}

	err = db.AutoMigrate(&model.GroupMember{})
	if err != nil {
		fmt.Printf("groupMember表构建失败: %s", err)
	}

	err = db.AutoMigrate(&model.Message{})
	if err != nil {
		fmt.Printf("message表构建失败: %s", err)
	}

	return &Mysql{
		db: db,
	}
}

func (m *Mysql) CreateGroup() error {
	g1 := &model.Group{
		Name:        "富婆找我",
		Description: "富婆找我",
	}
	g2 := &model.Group{
		Name:        "不想上班",
		Description: "不想上班",
	}
	res := m.db.Create(g1)
	if res.Error != nil {
		return res.Error
	}
	res = m.db.Create(g2)
	if res.Error != nil {
		return res.Error
	}

	return nil
}

func (m *Mysql) GetGroups() ([]*model.Group, error) {
	var groups []*model.Group
	res := m.db.Limit(10).Find(&groups)
	if res.Error != nil {
		return nil, res.Error
	}

	return groups, nil
}

func (m *Mysql) GetGroup(id int32) (*model.Group, error) {
	var group model.Group
	group.ID = uint(id)

	res := m.db.First(&group)
	if res.Error != nil {
		return nil, res.Error
	}

	return &group, nil
}

func (m *Mysql) WriteMessage(msg *messagepb.SendMessageService_Request) (*messagepb.Message, error) {
	var msgRecord model.Message
	msgRecord.Content = msg.Content
	msgRecord.SenderId = uint(msg.SenderId)
	msgRecord.RecipientId = uint(msg.SessionId)

	res := m.db.Create(&msgRecord)
	if res.Error != nil {
		fmt.Printf("写入消息失败 %v \n", res.Error)
		return nil, res.Error
	}

	userMap, err := m.QueryUsers([]uint{uint(msg.SenderId)})
	if err != nil {
		fmt.Printf("查询用户信息失败 %v \n", err)
		return nil, err
	}

	return &messagepb.Message{
		Id:         int32(msgRecord.ID),
		SenderId:   int32(msgRecord.SenderId),
		Content:    msgRecord.Content,
		SenderInfo: userMap[uint(msg.SenderId)],
	}, nil
}

func (m *Mysql) GetMessageList(req *messagepb.GetMessageListService_Request) (*messagepb.GetMessageListService_Response, error) {
	var msgList []*model.Message
	var dbRes *gorm.DB

	if req.MessageId == 0 {
		dbRes = m.db.Where("recipient_id = ?", req.SessionId).Order("id DESC").Limit(MessageListLimit).Find(&msgList)
		// reverse
		for i, j := 0, len(msgList)-1; i < j; i, j = i+1, j-1 {
			msgList[i], msgList[j] = msgList[j], msgList[i]
		}
	} else if req.Direction == *messagepb.MessageQueryDirection_before.Enum() {
		dbRes = m.db.Limit(MessageListLimit).Where("id < ? AND recipient_id = ?", req.MessageId, req.SessionId).Order("id DESC").Limit(MessageListLimit).Find(&msgList)
		// reverse
		for i, j := 0, len(msgList)-1; i < j; i, j = i+1, j-1 {
			msgList[i], msgList[j] = msgList[j], msgList[i]
		}
	} else {
		dbRes = m.db.Limit(MessageListLimit).Where("id > ? AND recipient_id = ?", req.MessageId, req.SessionId).Find(&msgList)

	}

	if dbRes.Error != nil {
		fmt.Printf("查询消息列表失败 %v \n", dbRes.Error)
		return nil, dbRes.Error
	}

	var userIds []uint
	for _, v := range msgList {
		userIds = append(userIds, v.SenderId)
	}
	// fmt.Printf("用户id列表 %v \n", userIds)
	userList, err := m.QueryUsers(userIds)
	if err != nil {
		return nil, err
	}

	var response []*messagepb.Message
	for _, v := range msgList {
		response = append(response, &messagepb.Message{
			Id:             int32(v.ID),
			SendTimeSecond: int32(v.CreatedAt),
			SenderId:       int32(v.SenderId),
			Content:        v.Content,
			SenderInfo:     userList[v.SenderId],
		})
	}
	// fmt.Printf("查询消息列表 %v \n", response)

	return &messagepb.GetMessageListService_Response{
		MessageList: response,
	}, nil
}

func (m *Mysql) QueryUsers(userIds []uint) (map[uint]*messagepb.UserEntity, error) {
	var userList []*model.User
	var userMap = make(map[uint]*messagepb.UserEntity)
	dbRes := m.db.Find(&userList, userIds)

	if dbRes.Error != nil {
		fmt.Printf("查询用户列表失败 %v \n", dbRes.Error)
		return nil, dbRes.Error
	}
	for _, u := range userList {
		userMap[u.ID] = &messagepb.UserEntity{
			Id: int32(u.ID),
			User: &messagepb.User{
				Name:   u.Name,
				Gender: messagepb.Gender(u.Gender),
			},
		}
	}

	// fmt.Printf("查询用户列表 %v \n", userMap)

	return userMap, nil
}
