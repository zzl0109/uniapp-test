package model

import mysqlConst "qiji/src/shared/mysql"

type Group struct {
	mysqlConst.BaseModel
	Name        string `gorm:"column: name;not null; index"`
	Description string `gorm:"column: description; default: \"\" "`
}
