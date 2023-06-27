package token

import (
	"testing"
	"time"

	"github.com/dgrijalva/jwt-go"
)

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1SU1LfVLPHCozMxH2Mo
4lgOEePzNm0tRgeLezV6ffAt0gunVTLw7onLRnrq0/IzW7yWR7QkrmBL7jTKEn5u
+qKhbwKfBstIs+bMY2Zkp18gnTxKLxoS2tFczGkPLPgizskuemMghRniWaoLcyeh
kd3qqGElvW/VDL5AaWTg0nLVkjRo9z+40RQzuVaE8AkAFmxZzow3x+VJYKdjykkJ
0iT9wCS0DRTXu269V264Vf/3jvredZiKRkgwlL9xNAwxXFg0x/XFw005UWVRIkdg
cKWTjpBP2dPwVZ4WWC+9aGVd+Gyn1o0CLelf4rEjGoXbAAEgAqeGUxrcIlbjXfbc
mwIDAQAB
-----END PUBLIC KEY-----`

func TestVerify(t *testing.T) {
	publicK, err := jwt.ParseRSAPublicKeyFromPEM([]byte(publicKey))

	if err != nil {
		t.Fatalf("转换公钥失败 %v", err)
	}

	verifier := &JwtTokenVerifier{
		PublicKey: publicK,
	}

	cases := []struct {
		name    string
		token   string
		now     time.Time
		want    string
		wantErr bool
	}{
		{
			name:  "valid_token",
			token: "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiY29vbGNhci9hdXRoIiwic3ViIjoiNjQzN2M4Y2ExNTcyODgwZGU2Yjc2YTM1In0.Dpo57B_C-6uMlX-JPA2bVXc4hWiknKfjl7NVhdhgV9RbG4OJuzmC0dqjY7X9pjEiV4I1gqFvxqJ3Tmb94Nl717dnYorDz9UWR6blPClb63q0gyKn2gaeNw4XyrUEDcQ20EHV-8i11lWHTGKsZcNAjLo2wGeF3H-k5OB33_4FHXgoIPo0IpMreKWA1shzOKR_7Fo-emMHuXyCecyfRw0GlKt2o70zc-_OZiJp8BclO8pII1IsphJUauPmr6_O2lOH_E4Xr5TYhBDgGaVGUy7iRGFzH1nuuyR6PmC5HfWzL9xbNbEJzF1FqNUS5dbRqRd3oJ-FGE1vhRXo-jzBG0Vu-w",
			now:   time.Unix(1516239122, 0),
			want:  "6437c8ca1572880de6b76a35",
		},
		{
			name:    "expired_token",
			token:   "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiY29vbGNhci9hdXRoIiwic3ViIjoiNjQzN2M4Y2ExNTcyODgwZGU2Yjc2YTM1In0.Dpo57B_C-6uMlX-JPA2bVXc4hWiknKfjl7NVhdhgV9RbG4OJuzmC0dqjY7X9pjEiV4I1gqFvxqJ3Tmb94Nl717dnYorDz9UWR6blPClb63q0gyKn2gaeNw4XyrUEDcQ20EHV-8i11lWHTGKsZcNAjLo2wGeF3H-k5OB33_4FHXgoIPo0IpMreKWA1shzOKR_7Fo-emMHuXyCecyfRw0GlKt2o70zc-_OZiJp8BclO8pII1IsphJUauPmr6_O2lOH_E4Xr5TYhBDgGaVGUy7iRGFzH1nuuyR6PmC5HfWzL9xbNbEJzF1FqNUS5dbRqRd3oJ-FGE1vhRXo-jzBG0Vu-w",
			now:     time.Unix(1517239122, 0),
			wantErr: true,
		},
		{
			name:    "bad_token",
			token:   "badtoken",
			now:     time.Unix(1517239122, 0),
			wantErr: true,
		},
	}

	for _, v := range cases {
		t.Run(v.name, func(t *testing.T) {
			jwt.TimeFunc = func() time.Time {
				return v.now
			}
			accountId, err := verifier.Verify(v.token)
			if !v.wantErr && err != nil {
				t.Errorf("校验结果未对应 %v", err)
			}
			if v.wantErr && err == nil {
				t.Errorf("希望出错，但未出错 %v", err)
			}

			if accountId != v.want {
				t.Errorf("校验token失败 希望：%q; 得到：%q", v.want, accountId)
			}
		})
	}

	// token := `eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiY29vbGNhci9hdXRoIiwic3ViIjoiNjQzN2M4Y2ExNTcyODgwZGU2Yjc2YTM1In0.Dpo57B_C-6uMlX-JPA2bVXc4hWiknKfjl7NVhdhgV9RbG4OJuzmC0dqjY7X9pjEiV4I1gqFvxqJ3Tmb94Nl717dnYorDz9UWR6blPClb63q0gyKn2gaeNw4XyrUEDcQ20EHV-8i11lWHTGKsZcNAjLo2wGeF3H-k5OB33_4FHXgoIPo0IpMreKWA1shzOKR_7Fo-emMHuXyCecyfRw0GlKt2o70zc-_OZiJp8BclO8pII1IsphJUauPmr6_O2lOH_E4Xr5TYhBDgGaVGUy7iRGFzH1nuuyR6PmC5HfWzL9xbNbEJzF1FqNUS5dbRqRd3oJ-FGE1vhRXo-jzBG0Vu-w`
	// jwt.TimeFunc = func() time.Time {
	// 	return time.Unix(1516239122, 0)
	// }

	// accountId, err2 := verifier.Verify(token)
	// if err2 != nil {
	// 	t.Errorf("校验token错误 %v", err2)
	// }

	// want := "6437c8ca1572880de6b76a35"

	// if accountId != want {
	// 	t.Errorf("校验token失败 希望：%q; 得到：%q", want, accountId)
	// }

}
