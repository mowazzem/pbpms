package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"pbpms/login"

	"github.com/gorilla/mux"
)

//LoginHandler struct
type LoginHandler struct {
	LUsecase login.Usecase
}

//NewLoginHandler will create a new loginhandler http object
func NewLoginHandler(r *mux.Router, lu login.Usecase) {
	handler := &LoginHandler{
		LUsecase: lu,
	}
	r.HandleFunc("/login", handler.getUserByCredentials).Methods("GET")
}

func (lh *LoginHandler) getUserByCredentials(w http.ResponseWriter, r *http.Request) {
	res := struct {
		Msg string `json:"msg"`
	}{
		Msg: "hello from login",
	}
	fmt.Println(res)
	json.NewEncoder(w).Encode(res)
}
