package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"

	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/controllers"
	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/models"
)

type mockUserService struct {
	mock.Mock
}

func (m *mockUserService) CreateUser(user *models.User) error {
	args := m.Called(user)
	return args.Error(0)
}

func (m *mockUserService) GetUser(id *string) (*models.User, error) {
	args := m.Called(id)
	return args.Get(0).(*models.User), args.Error(1)
}

func (m *mockUserService) GetAll() ([]*models.User, error) {
	args := m.Called()
	return args.Get(0).([]*models.User), args.Error(1)
}

func (m *mockUserService) UpdateUser(user *models.User) error {
	args := m.Called(user)
	return args.Error(0)
}

func (m *mockUserService) DeleteUser(id *string) error {
	args := m.Called(id)
	return args.Error(0)
}

func TestCreateUser(t *testing.T) {
	mockService := new(mockUserService)
	controller := controllers.New(mockService)

	user := models.User{
		UserID:    "1",
		FirstName: "John",
		LastName:  "Doe",
		UserName:  "johndoe",
		Password:  "password123",
		Email:     "john@example.com",
		PhoneNo:   "1234567890",
	}
	mockService.On("CreateUser", &user).Return(nil)

	reqBody, _ := json.Marshal(user)
	req, _ := http.NewRequest("POST", "/user/create", bytes.NewBuffer(reqBody))
	w := httptest.NewRecorder()

	router := gin.Default()
	router.POST("/user/create", controller.CreateUser)

	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
}

func TestGetUser(t *testing.T) {
	mockService := new(mockUserService)
	controller := controllers.New(mockService)

	userID := "1"
	user := &models.User{
		UserID:    userID,
		FirstName: "John",
		LastName:  "Doe",
		UserName:  "johndoe",
		Password:  "password123",
		Email:     "john@example.com",
		PhoneNo:   "1234567890",
	}
	mockService.On("GetUser", &userID).Return(user, nil)

	req, _ := http.NewRequest("GET", "/user/get/"+userID, nil)
	w := httptest.NewRecorder()

	router := gin.Default()
	router.GET("/user/get/:id", controller.GetUser)

	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
}

func TestGetAllUsers(t *testing.T) {
	mockService := new(mockUserService)
	controller := controllers.New(mockService)

	users := []*models.User{
		{
			UserID:    "1",
			FirstName: "John",
			LastName:  "Doe",
			UserName:  "johndoe",
			Password:  "password123",
			Email:     "john@example.com",
			PhoneNo:   "1234567890",
		},
	}
	mockService.On("GetAll").Return(users, nil)

	req, _ := http.NewRequest("GET", "/user/getall", nil)
	w := httptest.NewRecorder()

	router := gin.Default()
	router.GET("/user/getall", controller.GetAll)

	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
}

func TestUpdateUser(t *testing.T) {
	mockService := new(mockUserService)
	controller := controllers.New(mockService)

	user := models.User{
		UserID:    "1",
		FirstName: "John",
		LastName:  "Doe",
		UserName:  "johndoe",
		Password:  "password123",
		Email:     "john@example.com",
		PhoneNo:   "1234567890",
	}
	mockService.On("UpdateUser", &user).Return(nil)

	reqBody, _ := json.Marshal(user)
	req, _ := http.NewRequest("PATCH", "/user/update", bytes.NewBuffer(reqBody))
	w := httptest.NewRecorder()

	router := gin.Default()
	router.PATCH("/user/update", controller.UpdateUser)

	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
}

func TestDeleteUser(t *testing.T) {
	mockService := new(mockUserService)
	controller := controllers.New(mockService)

	username := "johndoe"
	mockService.On("DeleteUser", &username).Return(nil)

	req, _ := http.NewRequest("DELETE", "/user/delete/"+username, nil)
	w := httptest.NewRecorder()

	router := gin.Default()
	router.DELETE("/user/delete/:name", controller.DeleteUser)

	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
}
