package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client
var collection *mongo.Collection

// User represents a website user.
type User struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	Username string             `bson:"username,omitempty" json:"username,omitempty"`
	Password string             `bson:"password,omitempty" json:"password,omitempty"`
	Email    string             `bson:"email,omitempty" json:"email,omitempty"`
}

func main() {
	fmt.Println("Starting the application...")

	// Use the SetServerAPIOptions() method to set the Stable API version to 1

	os.Setenv("MONGODB_URI", "mongodb+srv://marcvillareal30:jxzecGkV3ugG5w3Y@insurance.c0iumta.mongodb.net/")
	opts := options.Client().ApplyURI(os.Getenv("MONGODB_URI"))

	// Create a new client and connect to the server
	client, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		panic(err)
	}
	defer func() {
		if err = client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()

	// Set up the collection
	collection = client.Database("Insurify").Collection("User")

	// Set up the router and handle functions
	router := mux.NewRouter()
	router.HandleFunc("/user", GetUserEndpoint).Methods("GET")
	router.HandleFunc("/user", CreateUserEndpoint).Methods("POST")

	// Send a ping to confirm a successful connection
	if err := client.Database("Insurify").RunCommand(context.TODO(), bson.D{{Key: "ping", Value: 1}}).Err(); err != nil {
		panic(err)
	}
	fmt.Println("Pinged your deployment. You successfully connected to MongoDB!")
	http.ListenAndServe(":12345", router)
}

// Functions set-up
func CreateUserEndpoint(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("content-type", "application/json")

	// Check if request is nil
	if request == nil {
		response.WriteHeader(http.StatusInternalServerError)
		response.Write([]byte(`{ "message": "Request is nil" }`))
		return
	}

	// Decode request body
	var newUser User
	err := json.NewDecoder(request.Body).Decode(&newUser)
	if err != nil {
		response.WriteHeader(http.StatusInternalServerError)
		response.Write([]byte(`{ "message": "Error decoding request body" }`))
		return
	}

	// Check if collection is nil
	if collection == nil {
		response.WriteHeader(http.StatusInternalServerError)
		response.Write([]byte(`{ "message": "Collection is nil" }`))
		return
	}

	// Insert user into collection
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
	result, err := collection.InsertOne(ctx, newUser)
	if err != nil {
		fmt.Println("Error inserting user:", err) // Log the error
		response.WriteHeader(http.StatusInternalServerError)
		response.Write([]byte(`{ "message": "Error inserting user" }`))
		return
	}

	// Create a map with the _id field
	responseData := map[string]interface{}{"_id": result.InsertedID}

	// Encode the response
	err = json.NewEncoder(response).Encode(responseData)
	if err != nil {
		response.WriteHeader(http.StatusInternalServerError)
		response.Write([]byte(`{ "message": "Error encoding response" }`))
		return
	}
}

func GetUserEndpoint(response http.ResponseWriter, request *http.Request) {
	response.Header().Set("content-type", "application/json")
	var users []User
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		response.WriteHeader(http.StatusInternalServerError)
		response.Write([]byte(`{ "message": "` + err.Error() + `" }`))
		return
	}
	defer cursor.Close(ctx)

	err = cursor.All(ctx, &users)
	if err != nil {
		response.WriteHeader(http.StatusInternalServerError)
		response.Write([]byte(`{ "message": "` + err.Error() + `" }`))
		return
	}

	json.NewEncoder(response).Encode(users)
}
