package dao

import (
	"fmt"
	"qiji/src/model"
	mysqlConst "qiji/src/shared/mysql"

	"gorm.io/gorm"
)

type Mysql struct {
	db *gorm.DB
}

func NewMysql(host string) *Mysql {
	db := mysqlConst.NewDB(host)
	err := db.AutoMigrate(&model.Group{})
	if err != nil {
		fmt.Printf("group模型构建失败: %s", err)
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
