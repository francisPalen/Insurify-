package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Policy struct {
	ID            primitive.ObjectID `bson:"_id"`
	ProductID     string             `json:"product_id"`
	UserID        string             `json:"user_id"`
	FirstName     *string            `json:"first_name" validate:"required,min=2,max=100"`
	LastName      *string            `json:"last_name" validate:"required,min=2,max=100"`
	PolicyPremium *string            `json:"premium"`
	StartDate     time.Time          `json:"start_date"`
	EndDate       time.Time          `json:"end_date"`
}
