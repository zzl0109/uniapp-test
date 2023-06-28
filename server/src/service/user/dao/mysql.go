package dao

import (
	"fmt"
	userpb "qiji/src/service/user/api/gen/v1"
	mysqlConst "qiji/src/shared/mysql"

	"gorm.io/gorm"
)

type Mysql struct {
	db *gorm.DB
}

type User struct {
	mysqlConst.BaseModel
	Name   string `gorm:"column:name; not nul;index"`
	Gender int    `gorm:"column:gender; default:1;comment:\"0:未指定 1:男 2:女\""`
	Token  string `gorm:"column:token; type:text"`
}

func NewMysql(host string) *Mysql {
	db := mysqlConst.NewDB(host)
	err := db.AutoMigrate(&User{})
	if err != nil {
		fmt.Printf("user模型构建失败: %s", err)
	}

	return &Mysql{
		db: db,
	}
}

func (m *Mysql) GetUser(id int) (*userpb.UserEntity, error) {
	var userRecord = &User{}

	// res := m.db.First(userRecord, "id = ?", string(id))
	res := m.db.First(userRecord, id)

	if res.Error != nil {
		return nil, res.Error
	}
	return &userpb.UserEntity{
		Id: int32(userRecord.ID),
		User: &userpb.User{
			Name:   userRecord.Name,
			Gender: userpb.Gender(userRecord.Gender),
			Token:  userRecord.Token,
		},
	}, nil
}
