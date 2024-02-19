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

func (m *mockUserService) GetUser(name *string) (*models.User, error) {
	args := m.Called(name)
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

func (m *mockUserService) DeleteUser(name *string) error {
	args := m.Called(name)
	return args.Error(0)
}

func TestCreateUser(t *testing.T) {
	mockService := new(mockUserService)
	controller := controllers.New(mockService)

	user := models.User{Name: "John", Age: 30, Address: models.Address{City: "City", Postcode: "12345", Street: "Main St", HouseNo: 10}}
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

	username := "John"
	user := &models.User{Name: username, Age: 30, Address: models.Address{City: "City", Postcode: "12345", Street: "Main St", HouseNo: 10}}
	mockService.On("GetUser", &username).Return(user, nil)

	req, _ := http.NewRequest("GET", "/user/get/"+username, nil)
	w := httptest.NewRecorder()

	router := gin.Default()
	router.GET("/user/get/:name", controller.GetUser)

	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
}

func TestGetAll(t *testing.T) {
	mockService := new(mockUserService)
	controller := controllers.New(mockService)

	users := []*models.User{{Name: "John", Age: 30, Address: models.Address{City: "City", Postcode: "12345", Street: "Main St", HouseNo: 10}}}
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

	user := models.User{Name: "John", Age: 35, Address: models.Address{City: "City", Postcode: "12345", Street: "Main St", HouseNo: 10}}
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

	username := "John"
	mockService.On("DeleteUser", &username).Return(nil)

	req, _ := http.NewRequest("DELETE", "/user/delete/"+username, nil)
	w := httptest.NewRecorder()

	router := gin.Default()
	router.DELETE("/user/delete/:name", controller.DeleteUser)

	router.ServeHTTP(w, req)

	assert.Equal(t, http.StatusOK, w.Code)
}
