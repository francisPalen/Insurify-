package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Claims struct {
	ID              primitive.ObjectID `bson:"_id"`
	PolicyID        string             `json:"policy_id"`
	AccidentDate    time.Time          `json:"accident_date"`
	PartiesInvolved *string            `json:"parties_involved"`
	Liability       *string            `json:"liability"`
}
