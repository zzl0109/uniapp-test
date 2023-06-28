package model

import mysqlConst "qiji/src/shared/mysql"

// 用户表
type User struct {
	mysqlConst.BaseModel
	Name   string `gorm:"column:name; not nul;index"`
	Gender int    `gorm:"column:gender; default:1;comment:\"0:未指定 1:男 2:女\""`
	Token  string `gorm:"column:token; type:text"`
}

// 群组表
type Group struct {
	mysqlConst.BaseModel
	Name        string `gorm:"column:name; not null; index"`
	Description string `gorm:"column:description; default:\"\" "`
}

// 群组成员映射表
type GroupMember struct {
	mysqlConst.BaseModel
	GroupId uint `gorm:"column:group_id;not null;"`
	UserId  uint `gorm:"column:user_id;not null;"`
}

// 消息表
type Message struct {
	mysqlConst.BaseModel
	SenderId    uint `gorm:"column:sender_id;not null;"`
	RecipientId uint `gorm:"column:recipient_id;not null;"`
	Content     uint `gorm:"column:content;not null;"`
}
