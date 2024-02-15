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

// Rest of the tests...
