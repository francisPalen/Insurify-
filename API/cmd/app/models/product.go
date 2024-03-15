package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Product struct {
	ID          primitive.ObjectID `bson:"_id"`
	Description *string            `json:"description"`
	Type        *string            `json:"type"`
	StartDate   time.Time          `json:"start_date"`
	EndDate     time.Time          `json:"end_date"`
	Discount    *string            `json:"discount"`
	SectoryType *string            `json:"sectory_type"`
}
