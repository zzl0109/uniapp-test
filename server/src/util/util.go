package util

import (
	"math/rand"
)

const (
	SessionIdKey = "session_id"
)

func GenRandomStr(n int) string {
	letterByte := []byte("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
	b := make([]byte, n)
	for i := range b {
		b[i] = letterByte[rand.Intn(len(letterByte))]
	}

	return string(b)
}
