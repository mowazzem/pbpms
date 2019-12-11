package login

import "pbpms/models"

//Usecase login usecase
type Usecase interface {
	GetUserByCredentials(username, password string) *models.User
}
