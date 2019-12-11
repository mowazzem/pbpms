package login

import "pbpms/models"

//Repository interface to act as contractor for login
type Repository interface {
	GetUserByCredentials(username, password string) *models.User
}
