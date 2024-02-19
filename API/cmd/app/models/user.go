package models

type Address struct {
	City     string `json: "city" bson:"city"`
	Postcode string `json: "postcode" bson:"postcode"`
	Street   string `json: "street" bson:"street"`
	HouseNo  int    `json: "houseno" bson:"houseno"`
}

type User struct {
	Name    string  `json: "name" bson:"user_name"`
	Age     int     `json: "age" bson:"user_age"`
	Address Address `json: "addressme" bson:"user_address"`
}
