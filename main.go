package main

import (
	"fmt"
	"time"
)

type Chore struct {
	Name string
	Frequency Frequency
	Weight int8
	time time.Time
}

type Frequency int
const (
	Daily Frequency = 0
	Weekly Frequency = 1
	BiWeekly Frequency = 2
	Monthly Freqneucy = 3
)

func main() {
	fmt.Println("Hello World")
	time.
}
