package dao

import (
	"context"
	"fmt"
	"qiji/src/model"
	authpb "qiji/src/service/auth/api/gen/v1"
	mysqlConst "qiji/src/shared/mysql"

	"gorm.io/gorm"
)

type Mysql struct {
	db *gorm.DB
}

func NewMysql(host string) *Mysql {
	db := mysqlConst.NewDB(host)
	err := db.AutoMigrate(&model.User{})
	if err != nil {
		fmt.Printf("user模型构建失败: %s", err)
	}

	return &Mysql{
		db: db,
	}
}

func (m *Mysql) CreateUser(user *authpb.User) (*authpb.UserEntity, error) {
	record := &model.User{}
	res := m.db.First(record, "name = ?", user.Name)
	if res.RowsAffected != 0 {
		return &authpb.UserEntity{
			Id: int32(record.ID),
			User: &authpb.User{
				Name:   record.Name,
				Gender: authpb.Gender(record.Gender),
				Token:  record.Token,
			},
		}, fmt.Errorf("用户已存在")
	}

	newUser := &model.User{
		Name:   user.Name,
		Gender: int(user.Gender),
	}

	res = m.db.Create(&newUser)
	if res.Error != nil {
		return nil, res.Error
	}

	return &authpb.UserEntity{
		Id:   int32(newUser.ID),
		User: user,
	}, nil
}

func (m *Mysql) UpdateUser(user *authpb.User, userId int) error {
	var updateUser = &model.User{
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

	// return &authpb.UserEntity{
	// 	Id:   int32(newUser.ID),
	// 	User: user,
	// }, nil
}

func (m *Mysql) HandleAddUserToGroups(c context.Context, userId int) error {
	var groups []*model.Group
	res := m.db.Limit(10).Find(&groups)
	if res.Error != nil {
		return res.Error
	}

	var groupMembers []*model.GroupMember

	for _, v := range groups {
		groupMembers = append(groupMembers, &model.GroupMember{
			GroupId: v.ID,
			UserId:  uint(userId),
		})
	}
	m.db.Create(groupMembers)

	return nil
}
