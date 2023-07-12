package main

import (
	"context"
	"fmt"
	"qiji/src/cmd/jwt/myjwt"
)

const (
	token  = `eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODkwNjU5MzAsImlhdCI6MTY4OTA2NTkyMCwiaXNzIjoidGVzdCIsInN1YiI6IjE2ODkwNjU5MjAifQ.Tl13iZxfoHS-Fg96cwYHlwAmsr9mhitRHesE1KrX_c-TCVn1WJy34BNsuCkvNiHwLBkNWZgYNYSPLv4Ds14h6UuC4tjZb1Z8cy-xGC2NAiYlTZmdt12CQ7BWHqnb_pq7zlNyKjqCJNIS3Oby3HIphlmX3h09SNCU1H8ifKFsN20WKN207wEIntwfh3pobHkqYjtxI63kVWxP9LWsmH1HszRA-dCXlucBQY0cwEKCFbgfd6Sm5_qZqR9LbCRhnruWtZGpS8Pg0ZtLP7La9WTnqtl-JjKL84RHCAizzY6nJosetIY2qAG7wzPXrKQMqnxMq0CNFXKkjmIkaGvI3fR5jg`
	token2 = `eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODkxNTUxMTAsImlhdCI6MTY4OTE1NDExMCwiaXNzIjoidGVzdCIsInN1YiI6IjE2ODkxNTQxMTAifQ.d4bNppNn0fCZQ8KlcR_ducKz6d966NDiAotFm5F7Ri8hmkgC_UU3-qYiQZ39Ox5P4xKO_B7oBJAJI4YNYgZqGRGb86wxF2dd6e90258m3DBd7IDnufRZp9AHBiezZwyVUZEUq2TOU-Cusda05pQIDdqYDSRs7gYwSHwaMYXBVWk`
	token3 = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODkwNjc2NTUsImlhdCI6MTY4OTA2NjY1NSwiaXNzIjoidGVzdCIsInN1YiI6IjE2ODkwNjY2NTUifQ.O4Ib3oxTjNExyJxtf9OyP_0aWAaj9R2XJ6hOOAjr70PazhFiXqwUNXaqXlfYUoqedKfaoj0iQft_joyyslcfvg`
)

func main() {
	s, _ := myjwt.Generate(context.Background(), "123")
	fmt.Printf("token: %v\n", s)

	s2, err := myjwt.Verify(context.Background(), s)
	fmt.Printf("err: %v\n", err)
	fmt.Printf("subject: %v\n", s2)
}
