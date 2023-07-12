package myjwt

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/dgrijalva/jwt-go"
)

const (
	publicKeyStr = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1SU1LfVLPHCozMxH2Mo
4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrq0/IzW7yWR7QkrmBL7jTKEn5u
+qKhbwKfBstIs+bMY2Zkp18gnTxKLxoS2tFczGkPLPgizskuemMghRniWaoLcyeh
kd3qqGElvW/VDL5AaWTg0nLVkjRo9z+40RQzuVaE8AkAFmxZzow3x+VJYKdjykkJ
0iT9wCS0DRTXu269V264Vf/3jvredZiKRkgwlL9xNAwxXFg0x/XFw005UWVRIkdg
cKWTjpBP2dPwVZ4WWC+9aGVd+Gyn1o0CLelf4rEjGoXbAAEgAqeGUxrcIlbjXfbc
mwIDAQAB
-----END PUBLIC KEY-----`
	publicKeyStr2 = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCSpNLTPyhPolt3WIyJnU6L6yzq
n4trX6jHhqfoduc0hTFhKiauec0vGWQOHTqanGYsXyIwdnzkWfQlgC/0S8EuZ01K
uGz1UOR3RBMOi9c7tV6wg0R0fJM9y5ThJ7p653ZYuCJuo/vwS+T8AcqisZ2GA6ZX
0P3ebKe/9Ai223CnLQIDAQAB
-----END PUBLIC KEY-----
`
	publicKeyStr3 = `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKIByxgar+g444M7kuyB9N3rg0bNeZif
VFbe+8tmEFq/qIwdEAXXhC7pOtrqTo+SOJJT0HKrCUnQfmh2w5sLd/kCAwEAAQ==
-----END PUBLIC KEY-----
`
)

func Verify(ctx context.Context, token string) (string, error) {
	publicKey, parseErr := jwt.ParseRSAPublicKeyFromPEM([]byte(publicKeyStr2))
	if parseErr != nil {
		return "", fmt.Errorf("转换公钥文件失败 %v", parseErr)
	}

	t, err := jwt.ParseWithClaims(token, &jwt.StandardClaims{}, func(t *jwt.Token) (interface{}, error) { return publicKey, nil })
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
	bys, _ := json.Marshal(sc)
	fmt.Printf("sc: %v\n", string(bys))
	return sc.Subject, nil

}
