package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Car struct {
	VehicleMake       *string `json:"vehicle_make"`
	AccelerationScore *string `json:"acceleration_score"`
	BrakingScore      *string `json:"braking_score"`
	AverageSpeed      *string `json:"average_speed"`
	MilesTravelled    *string `json:"miles_travelled"`
}

type Home struct {
	FireIncidents      *string `json:"fire_incidents"`
	TheftIncidents     *string `json:"theft_incidents"`
	FloodIncidents     *string `json:"flood_incidents"`
	PolicyPremium      *string `json:"policy_premium"`
	ClaimedAmount      *string `json:"claimed_amount"`
	TotalCoverageLimit *string `json:"total_coverage_limit"`
}

type Life struct {
	Age                *string   `json:"age"`
	HealthConditions   *string   `json:"health_conditions"`
	Smoker             *string   `json:"smoker"`
	InsuranceCoverage  *string   `json:"insurance_coverage"`
	TotalPolicyValue   *string   `json:"total_policy_value"`
	TotalPremiumPaid   *string   `json:"total_premium_paid"`
	PolicyRenewalDate  time.Time `json:"policy_renewal_date"`
	LastMedicalCheckup time.Time `json:"last_medical_checkup"`
}

type Metrics struct {
	ID     primitive.ObjectID `bson:"_id"`
	UserID string             `bson:"user_id"`
	Car    Car                `json:"car_metrics"`
	Home   Home               `json:"home_metrics"`
	Life   Life               `json:"life_metrics"`
}
