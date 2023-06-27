package token

import (
	"crypto/rsa"
	"fmt"

	"github.com/dgrijalva/jwt-go"
)

type JwtTokenVerifier struct {
	PublicKey *rsa.PublicKey
}

func (v *JwtTokenVerifier) Verify(token string) (string, error) {
	t, err := jwt.ParseWithClaims(token, &jwt.StandardClaims{}, func(t *jwt.Token) (interface{}, error) { return v.PublicKey, nil })
	if err != nil {
		return "", fmt.Errorf("token转换失败 %v", err)
	}

	if !t.Valid {
		return "", fmt.Errorf("token失效")
	}

	sc := t.Claims.(*jwt.StandardClaims)

	if err2 := sc.Valid(); err2 != nil {
		return "", fmt.Errorf("claims失效")
	}
	return sc.Subject, nil
}
