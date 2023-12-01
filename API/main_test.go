// main_test.go
package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var testClient *mongo.Client
var testCollection *mongo.Collection

func setupTest() {
	// Set up a test MongoDB connection
	os.Setenv("MONGODB_URI", "mongodb+srv://marcvillareal30:jxzecGkV3ugG5w3Y@insurance.c0iumta.mongodb.net/")

	// Initialize a test MongoDB client and collection
	testOpts := options.Client().ApplyURI(os.Getenv("MONGODB_URI"))
	testClient, _ = mongo.Connect(context.TODO(), testOpts)
	testCollection = testClient.Database("Insurify").Collection("User")
}

func teardownTest() {
	// Close the test MongoDB client
	if testClient != nil {
		_ = testClient.Disconnect(context.TODO())
	}
}

func TestMain(m *testing.M) {
	// Set up and tear down the test environment
	setupTest()
	defer teardownTest()

	// Run the tests
	m.Run()
}

// Rest of the tests...

func TestCreateUserEndpoint(t *testing.T) {
	// Set up a sample user
	newUser := User{
		Username: "hello",
		Password: "testpassword",
		Email:    "test@example.com",
	}

	// Convert the user to JSON
	jsonUser, err := json.Marshal(newUser)
	if err != nil {
		t.Fatalf("Error marshalling user to JSON: %v", err)
	}

	// Create a request to the CreateUserEndpoint
	req, err := http.NewRequest("POST", "/user", bytes.NewBuffer(jsonUser))
	if err != nil {
		t.Fatalf("Error creating request: %v", err)
	}

	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()

	// Call the CreateUserEndpoint
	CreateUserEndpoint(rr, req)

	// Log the response body
	fmt.Println(rr.Body.String())

	// Check the response body
	var response map[string]interface{}
	err = json.Unmarshal(rr.Body.Bytes(), &response)
	if err != nil {
		t.Fatalf("Error unmarshalling response: %v", err)
	}
}

func TestGetUserEndpoint(t *testing.T) {
	// Set up a sample user
	sampleUser := User{
		Username: "bye",
		Password: "testpassword",
		Email:    "test@example.com",
	}

	// Insert the sample user into the test collection
	result, err := testCollection.InsertOne(context.TODO(), sampleUser)
	if err != nil {
		t.Fatalf("Error inserting sample user into test collection: %v", err)
	}

	// Debug: Print the inserted user ID
	t.Log("Inserted User ID:", result.InsertedID)

	// Get the inserted user ID
	userID, ok := result.InsertedID.(primitive.ObjectID)
	if !ok {
		t.Fatalf("Error extracting user ID from result: %v", result.InsertedID)
	}

	// Debug: Print the extracted user ID
	t.Log("Extracted User ID:", userID.Hex())

	// Create a request to the GetUserEndpoint with the user ID in the URL
	req, err := http.NewRequest("GET", fmt.Sprintf("/user/%s", userID.Hex()), nil)
	if err != nil {
		t.Fatalf("Error creating request: %v", err)
	}

	// Debug: Print the request URL
	t.Log("Request URL:", req.URL.String())

	// Create a ResponseRecorder to record the response
	rr := httptest.NewRecorder()

	// Call the GetUserEndpoint
	GetUserEndpoint(rr, req)

	// Debug: Print the response body
	t.Log("Response Body:", string(rr.Body.Bytes()))

	// Check the response status code
	if rr.Code != http.StatusOK {
		t.Errorf("Expected status %d, but got %d", http.StatusOK, rr.Code)
	}

	// Check the response body
	var responseUser User
	err = json.Unmarshal(rr.Body.Bytes(), &responseUser)
	if err != nil {
		t.Fatalf("Error unmarshalling response: %v\nResponse Body: %s", err, rr.Body.Bytes())
	}

	// Debug: Print the decoded user
	t.Log("Decoded User:", responseUser)

	// Compare the retrieved user with the sample user
	if responseUser.Username != sampleUser.Username {
		t.Errorf("Expected username %s, but got %s", sampleUser.Username, responseUser.Username)
	}
}
