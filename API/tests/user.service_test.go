package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// User is the model that governs all notes objects retrived or inserted into the DB
type User struct {
	ID            primitive.ObjectID `bson:"_id"`
	First_name    *string            `json:"first_name" validate:"required,min=2,max=100"`
	Last_name     *string            `json:"last_name" validate:"required,min=2,max=100"`
	Password      *string            `json:"Password" validate:"required,min=6"`
	Email         *string            `json:"email" validate:"email,required"`
	Phone         *string            `json:"phone" validate:"required"`
	Token         *string            `json:"token"`
	Refresh_token *string            `json:"refresh_token"`
	Created_at    time.Time          `json:"created_at"`
	Updated_at    time.Time          `json:"updated_at"`
	User_id       string             `json:"user_id"`
}

type mockUserService struct {
	mock.Mock
}

func (m *mockUserService) CreateUser(user *User) error {
	args := m.Called(user)
	return args.Error(0)
}

func (m *mockUserService) GetUser(id *string) (*User, error) {
	args := m.Called(id)
	return args.Get(0).(*User), args.Error(1)
}

func (m *mockUserService) GetAll() ([]*User, error) {
	args := m.Called()
	return args.Get(0).([]*User), args.Error(1)
}

func (m *mockUserService) UpdateUser(user *User) error {
	args := m.Called(user)
	return args.Error(0)
}

func (m *mockUserService) DeleteUser(id *string) error {
	args := m.Called(id)
	return args.Error(0)
}

func TestCreateUser(t *testing.T) {
	mockService := new(mockUserService)

	user := &User{
		User_id:    "1",
		First_name: stringPointer("John"),
		Last_name:  stringPointer("Doe"),
		Password:   stringPointer("password123"),
		Email:      stringPointer("john@example.com"),
		Phone:      stringPointer("1234567890"),
	}

	mockService.On("CreateUser", user).Return(nil)

	reqBody, _ := json.Marshal(user)
	req, _ := http.NewRequest("POST", "/user/create", bytes.NewBuffer(reqBody))
	w := httptest.NewRecorder()

	router := gin.Default()
	router.POST("/user/create", func(c *gin.Context) {
		// Extract user from request and call controller method
	})

	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
}

func stringPointer(s string) *string {
	return &s
}
