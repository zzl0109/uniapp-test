package mysqlConst

import (
	"errors"
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type BaseModel struct {
	ID        uint `gorm:"primaryKey"`
	CreatedAt int
	UpdatedAt int
}

const TestHost = "118.89.93.58:3306"

func NewDB(host string) *gorm.DB {
	dsn := fmt.Sprintf("root:zhangzhulei@tcp(%s)/qiji?charset=utf8&parseTime=True&loc=Local", host)
	// dsn := "root:zhangzhulei@tcp(118.89.93.58:3306)/qiji?charset=utf8&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to open database")
	}

	return db
}

func IsNotFound(err error) bool {
	return errors.Is(err, gorm.ErrRecordNotFound)
}
