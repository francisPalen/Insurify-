package main

import (
	"context"
	"os"
	"testing"

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

package services

import (
    "context"
    "testing"
    "reflect"
    "gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/models"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

// Define a test user
var testUser = &models.User{
    Name:    "Test User",
    Age:     30,
    Address: "Test Address",
}

func TestUserService(t *testing.T) {
    // Set up MongoDB client and context
    client, err := mongo.Connect(context.Background(), options.Client().ApplyURI("mongodb://localhost:27017"))
    if err != nil {
        t.Fatal(err)
    }
    defer client.Disconnect(context.Background())

    // Get a handle to the database and collection
    db := client.Database("testdb")
    collection := db.Collection("users")

    // Create a new instance of UserServiceImpl
    userService := NewUserService(collection, context.Background())

    // Test CreateUser
    t.Run("CreateUser", func(t *testing.T) {
        err := userService.CreateUser(testUser)
        if err != nil {
            t.Errorf("CreateUser() error = %v, want nil", err)
        }

        // Clean up created user after test
        defer func() {
            err := userService.DeleteUser(&testUser.Name)
            if err != nil {
                t.Errorf("Error cleaning up test user: %v", err)
            }
        }()
    })

    // Test GetUser
    t.Run("GetUser", func(t *testing.T) {
        createdUser, err := userService.GetUser(&testUser.Name)
        if err != nil {
            t.Errorf("GetUser() error = %v, want nil", err)
        }

        if !reflect.DeepEqual(createdUser, testUser) {
            t.Errorf("GetUser() got = %v, want %v", createdUser, testUser)
        }
    })

    // Test UpdateUser
    t.Run("UpdateUser", func(t *testing.T) {
        updatedUser := &models.User{
            Name:    "Test User",
            Age:     35,
            Address: "Updated Address",
        }

        err := userService.UpdateUser(updatedUser)
        if err != nil {
            t.Errorf("UpdateUser() error = %v, want nil", err)
        }

        // Clean up updated user after test
        defer func() {
            err := userService.UpdateUser(testUser) // Revert changes
            if err != nil {
                t.Errorf("Error reverting changes: %v", err)
            }
        }()
    })

    // Test DeleteUser
    t.Run("DeleteUser", func(t *testing.T) {
        err := userService.DeleteUser(&testUser.Name)
        if err != nil {
            t.Errorf("DeleteUser() error = %v, want nil", err)
        }
    })
}
