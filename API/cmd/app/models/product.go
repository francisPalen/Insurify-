package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Product struct {
	ID          primitive.ObjectID `bson:"_id"`
	Description *string            `json:"description"`
	Type        *string            `json:"type"`
	Start_date  time.Time          `json:"start_date"`
	End_date    time.Time          `json:"end_date"`
	Discount    *string            `json:"discount"`
	Sector_type *string            `json:"sector_type"`
}
