package models

type Policy struct {
	ID            string  `json:"id" bson:"id"`
	PolicyNo      string  `json:"number" bson:"number"`
	StartDate     string  `json:"start-date" bson:"start-date"`
	EndDate       string  `json:"end-date" bson:"end-date"`
	PolicyPremium float64 `json:"premium" bson:"premium"`
	PolicyType    string  `json:"policy_type" bson:"policy_type"`
	UserID        string  `json:"user_id" bson:"user_id"`
}
