package main

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Define a test user
var testUser = &User{
	Name:    "Test User",
	Age:     30,
	Address: "Test Address",
}

// Define the User struct
type User struct {
	Name    string `bson:"name"`
	Age     int    `bson:"age"`
	Address string `bson:"address"`
}

// Define the UserService interface
type UserService interface {
	CreateUser(user *User) error
	GetUser(name *string) (*User, error)
	UpdateUser(user *User) error
	DeleteUser(name *string) error
}

// Define the UserServiceImpl struct
type UserServiceImpl struct {
	userCollection *mongo.Collection
	ctx            context.Context
}

// Define the NewUserService function
func NewUserService(userCollection *mongo.Collection, ctx context.Context) UserService {
	return &UserServiceImpl{
		userCollection: userCollection,
		ctx:            ctx,
	}
}

// Implement the CreateUser method of UserService
func (u *UserServiceImpl) CreateUser(user *User) error {
	_, err := u.userCollection.InsertOne(u.ctx, user)
	return err
}

// Implement the GetUser method of UserService
func (u *UserServiceImpl) GetUser(name *string) (*User, error) {
	var user User
	err := u.userCollection.FindOne(u.ctx, map[string]string{"name": *name}).Decode(&user)
	return &user, err
}

// Implement the UpdateUser method of UserService
func (u *UserServiceImpl) UpdateUser(user *User) error {
	filter := map[string]string{"name": user.Name}
	update := map[string]interface{}{
		"$set": map[string]interface{}{
			"age":     user.Age,
			"address": user.Address,
		},
	}
	_, err := u.userCollection.UpdateOne(u.ctx, filter, update)
	return err
}

// Implement the DeleteUser method of UserService
func (u *UserServiceImpl) DeleteUser(name *string) error {
	filter := map[string]string{"name": *name}
	_, err := u.userCollection.DeleteOne(u.ctx, filter)
	return err
}

func TestUserService(t *testing.T) {
	// Set up MongoDB client and context
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI("mongodb://localhost:27017"))
	require.NoError(t, err)
	defer client.Disconnect(context.Background())

	// Get a handle to the database and collection
	db := client.Database("Insurify")
	collection := db.Collection("Users")

	// Create a new instance of UserServiceImpl
	userService := NewUserService(collection, context.Background())

	// Test CreateUser
	t.Run("CreateUser", func(t *testing.T) {
		err := userService.CreateUser(testUser)
		assert.NoError(t, err)

		// Clean up created user after test
		defer func() {
			err := userService.DeleteUser(&testUser.Name)
			assert.NoError(t, err)
		}()
	})

	// Test GetUser
	t.Run("GetUser", func(t *testing.T) {
		createdUser, err := userService.GetUser(&testUser.Name)
		assert.NoError(t, err)

		assert.Equal(t, testUser, createdUser)
	})

	// Test UpdateUser
	t.Run("UpdateUser", func(t *testing.T) {
		updatedUser := &User{
			Name:    "Test User",
			Age:     35,
			Address: "Updated Address",
		}

		err := userService.UpdateUser(updatedUser)
		assert.NoError(t, err)

		// Clean up updated user after test
		defer func() {
			err := userService.UpdateUser(testUser) // Revert changes
			assert.NoError(t, err)
		}()
	})

	// Test DeleteUser
	t.Run("DeleteUser", func(t *testing.T) {
		err := userService.DeleteUser(&testUser.Name)
		assert.NoError(t, err)
	})
}
