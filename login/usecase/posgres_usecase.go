package usecase

import (
	"pbpms/login"
	"pbpms/models"
)

type loginUsecase struct {
	loginRepo login.Repository
}

//NewLoginUsecase create new object which implements login.usecase
func NewLoginUsecase(lr login.Repository) login.Usecase {
	return &loginUsecase{lr}
}

//GetUserByCredentials func to retrieve user info calling repository
func (lu *loginUsecase) GetUserByCredentials(username, password string) *models.User {
	if lu.loginRepo.GetUserByCredentials(username, password) == nil {
		return nil
	}

	return lu.loginRepo.GetUserByCredentials(username, password)
}
