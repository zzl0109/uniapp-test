package main

import (
	"encoding/json"
	"fmt"
	"runtime"
	"sync"
)

type Test struct {
	a string
	b string
}

func (t *Test) String() string {
	return t.a + t.b
}

func main() {
	var t = &Test{a: "ss", b: "bbb"}

	var m sync.Mutex
	// fmt.Printf("info %v", t)
	b, _ := json.Marshal(t)
	runtime.Gosched()

	m.Lock()
	fmt.Printf("info %s", b)
}
