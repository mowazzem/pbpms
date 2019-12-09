package main

import (
	"fmt"
	"net"
	"os"
)

func main() {
	fmt.Println(getLocalIP())
}

func getLocalIP() string {
	host, _ := os.Hostname()
	addrs, _ := net.LookupIP(host)
	for _, addr := range addrs {
		if ipv4 := addr.To4(); ipv4 != nil {
			return ipv4.String()
		}
	}
	return ""
}
