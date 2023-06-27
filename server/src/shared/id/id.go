package id

type UserId string

func (b UserId) String() string {
	return string(b)
}
