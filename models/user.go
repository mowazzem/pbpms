package models

import (
	"github.com/jinzhu/gorm"
)

//User info struct
type User struct {
	gorm.Model
	UserName     string `gorm:"type:varchar(100);not null;unique_index"`
	Password     string `gorm:"type:varchar(256);not null"`
	PasswordSalt string `gorm:"typ:varchar(50)"`
}
