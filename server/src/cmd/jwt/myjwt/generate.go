package myjwt

import (
	"context"
	"fmt"
	"strconv"
	"time"

	"github.com/dgrijalva/jwt-go"
)

const (
	privateKeyStr = `-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC7VJTUt9Us8cKj
MzEfYyjiWA4R4/M2bS1GB4t7NXp98C3SC6dVMvDuictGeurT8jNbvJZHtCSuYEvu
NMoSfm76oqFvAp8Gy0iz5sxjZmSnXyCdPEovGhLa0VzMaQ8s+CLOyS56YyCFGeJZ
qgtzJ6GR3eqoYSW9b9UMvkBpZODSctWSNGj3P7jRFDO5VoTwCQAWbFnOjDfH5Ulg
p2PKSQnSJP3AJLQNFNe7br1XbrhV//eO+t51mIpGSDCUv3E0DDFcWDTH9cXDTTlR
ZVEiR2BwpZOOkE/Z0/BVnhZYL71oZV34bKfWjQIt6V/isSMahdsAASACp4ZTGtwi
VuNd9tybAgMBAAECggEBAKTmjaS6tkK8BlPXClTQ2vpz/N6uxDeS35mXpqasqskV
laAidgg/sWqpjXDbXr93otIMLlWsM+X0CqMDgSXKejLS2jx4GDjI1ZTXg++0AMJ8
sJ74pWzVDOfmCEQ/7wXs3+cbnXhKriO8Z036q92Qc1+N87SI38nkGa0ABH9CN83H
mQqt4fB7UdHzuIRe/me2PGhIq5ZBzj6h3BpoPGzEP+x3l9YmK8t/1cN0pqI+dQwY
dgfGjackLu/2qH80MCF7IyQaseZUOJyKrCLtSD/Iixv/hzDEUPfOCjFDgTpzf3cw
ta8+oE4wHCo1iI1/4TlPkwmXx4qSXtmw4aQPz7IDQvECgYEA8KNThCO2gsC2I9PQ
DM/8Cw0O983WCDY+oi+7JPiNAJwv5DYBqEZB1QYdj06YD16XlC/HAZMsMku1na2T
N0driwenQQWzoev3g2S7gRDoS/FCJSI3jJ+kjgtaA7Qmzlgk1TxODN+G1H91HW7t
0l7VnL27IWyYo2qRRK3jzxqUiPUCgYEAx0oQs2reBQGMVZnApD1jeq7n4MvNLcPv
t8b/eU9iUv6Y4Mj0Suo/AU8lYZXm8ubbqAlwz2VSVunD2tOplHyMUrtCtObAfVDU
AhCndKaA9gApgfb3xw1IKbuQ1u4IF1FJl3VtumfQn//LiH1B3rXhcdyo3/vIttEk
48RakUKClU8CgYEAzV7W3COOlDDcQd935DdtKBFRAPRPAlspQUnzMi5eSHMD/ISL
DY5IiQHbIH83D4bvXq0X7qQoSBSNP7Dvv3HYuqMhf0DaegrlBuJllFVVq9qPVRnK
xt1Il2HgxOBvbhOT+9in1BzA+YJ99UzC85O0Qz06A+CmtHEy4aZ2kj5hHjECgYEA
mNS4+A8Fkss8Js1RieK2LniBxMgmYml3pfVLKGnzmng7H2+cwPLhPIzIuwytXywh
2bzbsYEfYx3EoEVgMEpPhoarQnYPukrJO4gwE2o5Te6T5mJSZGlQJQj9q4ZB2Dfz
et6INsK0oG8XVGXSpQvQh3RUYekCZQkBBFcpqWpbIEsCgYAnM3DQf3FJoSnXaMhr
VBIovic5l0xFkEHskAjFTevO86Fsz1C2aSeRKSqGFoOQ0tmJzBEs1R6KqnHInicD
TQrKhArgLXX4v3CddjfTRJkFWDbE/CkvKZNOrcf1nhaGCPspRJj2KUkj1Fhl9Cnc
dn/RsYEONbwQSjIfMPkvxF+8HQ==
-----END PRIVATE KEY-----`
	privateKeyStr2 = `-----BEGIN RSA PRIVATE KEY-----
MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJKk0tM/KE+iW3dY
jImdTovrLOqfi2tfqMeGp+h25zSFMWEqJq55zS8ZZA4dOpqcZixfIjB2fORZ9CWA
L/RLwS5nTUq4bPVQ5HdEEw6L1zu1XrCDRHR8kz3LlOEnunrndli4Im6j+/BL5PwB
yqKxnYYDplfQ/d5sp7/0CLbbcKctAgMBAAECgYEAjkj4+tmMHoCVKR609g25Gc/t
fBWj7GIb3MVOBCPiwDYALJv+fkpWiT2ktIEtzLi19pW0EbvWAKc7Wmufm/UpEYpE
+XR7N+RJceEqIGIweTA67cqJV9U9be7CgZ5qC5gzQaKwn9aVPi7BA+HRMUXRB14m
ykNYfL9pz+f2sZNsDO0CQQDE1egLQCfZWwhEzXFvuRN3EUHVTJSKfS0VN3Iz7idX
MeNLyv7KrEu+PFVSOr+83+DxdZW6YFNrztsPQQZGgXuLAkEAvrjENHgazTKWUsGL
Gt3IQ6HZsmuZuW/2PuJI+QZqWVCrdVvBKH/TPLbU5jRlBvwY3a9E2Pbok52TbnIa
G2MfJwJARIRlYs0xUeLzTOfqzcYx9WeHcBVZO5/5OoJzeYo0HZEbGv4NlUVGlHDy
Dk6vAbM43TReK2Nuhn+aF4Q+B/r4owJBAK70YZBcSQHJkRpTT18S6j4Yf9JrYHY6
neKrxBMk7nQGS3L5+6RCNi2w7nZKxA53PfxGZtq9DTc0yuT7KLXM5OsCQBtaE0Ek
fzVZdUPXk5kW1nPZHnnXX3uTqZOFjs/KWiQoXSoKqjKkcMioe0h2+CH73x/9Bj66
u89WVP8H9kakaTQ=
-----END RSA PRIVATE KEY-----
`
	privateKeyStr3 = `-----BEGIN RSA PRIVATE KEY-----
MIIBVgIBADANBgkqhkiG9w0BAQEFAASCAUAwggE8AgEAAkEAogHLGBqv6DjjgzuS
7IH03euDRs15mJ9UVt77y2YQWr+ojB0QBdeELuk62upOj5I4klPQcqsJSdB+aHbD
mwt3+QIDAQABAkEAhpe00hbB080HfyyMOL8S3xfdnYHxppGgMPfZ+raVmb3M1I5R
kbSsEpbkW94oWjg8SQU6cxGkKjN7fY5yuxszgQIhAPvDEqSm7q9zSh9ycPU047Lc
zisa2cjeEyLT7OBX3cdRAiEApLvvn4clg4MuV/Mqdy988HGif6zkRiwDS0dhzaoS
zCkCIDT2jcZ7o7zfORmyfpbnIHuxPeINjQFXzpjGEpADjBFxAiEAnctHpM+Xp3mo
kqZiLvhV/RtcRGAf6PeP0DP4A0C98MECIQDWKl/fvu36T6kzyN2kODfuD8pHrK+4
Jsf/MrdeA9nT5A==
-----END RSA PRIVATE KEY-----
`
)

func Generate(ctx context.Context, sub string) (string, error) {
	newSec := time.Now().Unix()
	privateKey, parseErr := jwt.ParseRSAPrivateKeyFromPEM([]byte(privateKeyStr2))
	if parseErr != nil {
		fmt.Errorf("转换私钥失败 %v", parseErr)
	}
	token := jwt.NewWithClaims(jwt.SigningMethodRS512, jwt.StandardClaims{
		Issuer:    "test",
		IssuedAt:  newSec,
		ExpiresAt: newSec + int64(100*10),
		Subject:   strconv.Itoa(int(newSec)),
	})

	tokenStr, err := token.SignedString(privateKey)
	if err != nil {
		fmt.Printf("err: %v\n", err)
		return "", err
	}
	return tokenStr, nil
}
