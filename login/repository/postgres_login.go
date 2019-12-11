package repository

import (
	"pbpms/login"
	"pbpms/models"

	"github.com/jinzhu/gorm"
)

type postgresLoginRepo struct {
	DB *gorm.DB
}

//NewPostgresLoginRepo will create a object which impliments login.Repository interface
func NewPostgresLoginRepo(db *gorm.DB) login.Repository {
	return &postgresLoginRepo{db}
}

//GetUserByCredentials func to retrieve user
func (l *postgresLoginRepo) GetUserByCredentials(username, password string) *models.User {
	var u *models.User
	l.DB.Where("username=?", username).Find(&u)
	return u
}
