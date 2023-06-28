package dao

import (
	"context"
	"log"
	mysqlConst "qiji/src/shared/mysql"
	"testing"
)

func TestAddUserToGroups(t *testing.T) {
	ctx := context.Background()

	m := NewMysql(mysqlConst.TestHost)
	err := m.HandleAddUserToGroups(ctx, 1)
	if err != nil {
		log.Fatal("关联失败", err)
	}

}
