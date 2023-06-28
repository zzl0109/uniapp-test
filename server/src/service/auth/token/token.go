package token

import (
	"crypto/rsa"
	"strconv"
	"time"

	"github.com/dgrijalva/jwt-go"
)

type JwtTokenGen struct {
	Issuer     string
	getNow     func() time.Time
	privateKey *rsa.PrivateKey
}

func NewJwtTokenGen(issuer string, privateKey *rsa.PrivateKey) *JwtTokenGen {
	return &JwtTokenGen{
		Issuer:     issuer,
		getNow:     time.Now,
		privateKey: privateKey,
	}
}

func (t *JwtTokenGen) GenerateToken(userId int, expire time.Duration) (string, error) {
	newSec := t.getNow().Unix()

	token := jwt.NewWithClaims(jwt.SigningMethodRS512, jwt.StandardClaims{
		Issuer:    t.Issuer,
		IssuedAt:  newSec,
		ExpiresAt: newSec + int64(expire.Seconds()),
		Subject:   strconv.Itoa(userId),
	})

	return token.SignedString(t.privateKey)
}
