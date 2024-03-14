package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"

	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/authentication/middleware"
	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/authentication/routes"
	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/controllers"
	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/services"
)

var (
	server      *gin.Engine
	mongoclient *mongo.Client
	ctx         context.Context
	err         error
	collection  *mongo.Collection

	// User
	userservice    services.UserService
	usercontroller controllers.UserController
	// Policy
	policyservice    services.PolicyService
	policycontroller controllers.PolicyController
)

func init() {
	ctx = context.TODO()

	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal("Error loading .env file")
	}

	MongoDb := os.Getenv("MONGODB_URI")

	mongoconn := options.Client().ApplyURI(MongoDb)
	mongoclient, err = mongo.Connect(ctx, mongoconn)
	if err != nil {
		log.Fatal(err)
	}
	err = mongoclient.Ping(ctx, readpref.Primary())
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Mongo Connection Established")

	// Insurify User Collection
	collection = mongoclient.Database("Insurify").Collection("User")
	userservice = services.NewUserService(collection, ctx)
	usercontroller = controllers.New(userservice)

	// Insurify Policy Collection
	collection = mongoclient.Database("Insurify").Collection("Policy")
	policyservice = services.NewPolicyService(collection, ctx)
	policycontroller = controllers.NewPolicy(policyservice)

	server = gin.Default()
}

func main() {
	defer mongoclient.Disconnect(ctx)

	basepath := server.Group("/Insurify")
	usercontroller.RegisterUserRoutes(basepath)
	policycontroller.RegisterPolicyRoutes(basepath)

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	// CORS middleware
	frontend := os.Getenv("FRONTEND_URL")
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{frontend} // Insurify Frontend URL
	server.Use(cors.New(config))

	routes.UserRoutes(server) // Add your routes here

	server.Use(middleware.Authentication())

	// API-1
	server.GET("/api-1", func(c *gin.Context) {
		c.JSON(200, gin.H{"success": "Access granted for api-1"})
	})

	// API-2
	server.GET("/api-2", func(c *gin.Context) {
		c.JSON(200, gin.H{"success": "Access granted for api-2"})
	})

	server.Run(":" + port)
}
