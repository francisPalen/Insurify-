package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Policy struct {
	ID         primitive.ObjectID `bson:"_id"`
	Product_id string             `json:"product_id"`
	User_id    string             `json:"user_id"`
	First_name *string            `json:"first_name" validate:"required,min=2,max=100"`
	Last_name  *string            `json:"last_name" validate:"required,min=2,max=100"`
	Premium    *string            `json:"premium"`
	Start_date time.Time          `json:"start_date"`
	End_date   time.Time          `json:"end_date"`
}
