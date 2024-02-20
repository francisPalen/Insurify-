package models

type User struct {
	UserID    string `json:"userID" bson:"userID"`
	FirstName string `json:"firstName" bson:"firstName"`
	LastName  string `json:"lastName" bson:"lastName"`
	UserName  string `json:"username" bson:"username"`
	Password  string `json:"password" bson:"password"`
	Email     string `json:"email" bson:"email"`
	PhoneNo   string `json:"phoneNo" bson:"phoneNo"`
}
