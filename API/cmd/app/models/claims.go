package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Claims struct {
	ID               primitive.ObjectID `bson:"_id"`
	Policy_id        string             `json:"policy_id"`
	Accident_date    time.Time          `json:"accident_date"`
	Parties_involved *string            `json:"parties_involved"`
	Liability        *string            `json:"liability"`
}
