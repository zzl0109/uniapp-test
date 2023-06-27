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

func (m *Mysql) CreateUser(user *userpb.User) (*userpb.UserEntity, error) {
	record := &User{}
	res := m.db.First(record, "name = ?", user.Name)
	if res.RowsAffected != 0 {
		return &userpb.UserEntity{
			Id: int32(record.ID),
			User: &userpb.User{
				Name:   record.Name,
				Gender: userpb.Gender(record.Gender),
				Token:  record.Token,
			},
		}, fmt.Errorf("用户已存在")
	}

	newUser := &User{
		Name:   user.Name,
		Gender: int(user.Gender),
	}

	res = m.db.Create(&newUser)
	if res.Error != nil {
		return nil, res.Error
	}

	return &userpb.UserEntity{
		Id:   int32(newUser.ID),
		User: user,
	}, nil
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

func (m *Mysql) UpdateUser(user *userpb.User, userId int) error {
	var updateUser = &User{
		Token: user.Token,
	}
	updateUser.ID = uint(userId)

	// db.Model(&user).Update("name", "hello")

	m.db.Model(updateUser).Update("token", updateUser.Token)

	// res := m.db.First(updateUser, userId)
	// if res.Error != nil {
	// 	return res.Error
	// }
	// updateUser.Token = user.Token
	// m.db.Model(updateUser).Update("token", updateUser.Token).Save(updateUser)
	// m.db.Save(updateUser)

	return nil
	// d := m.db.Model(updateUser).Updates(updateUser)

	// res = m.db.Create(&newUser)
	// if res.Error != nil {
	// 	return nil, res.Error
	// }

	// return &userpb.UserEntity{
	// 	Id:   int32(newUser.ID),
	// 	User: user,
	// }, nil
}
