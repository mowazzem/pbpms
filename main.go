package main

import (
	"log"
	"net"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter().StrictSlash(true)
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("ui/pbpms-ui/build/static/"))))
	r.HandleFunc("/", indexHandler)
	r.HandleFunc("/manifest.json", manifestHandler)
	r.HandleFunc("/logo192.png", logoHandler)

	srv := http.Server{
		Handler:      r,
		Addr:         ":8881",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "ui/pbpms-ui/build/index.html")
}

func manifestHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "ui/pbpms-ui/build/manifest.json")
}

func logoHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "ui/pbpms-ui/build/logo192.png")
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
