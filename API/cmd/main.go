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
	// Metrics
	metricservice     services.MetricsService
	metricscontroller controllers.MetricsController
	// Claims
	claimsservice    services.ClaimsService
	claimscontroller controllers.ClaimsController
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

	// Insurify Metrics Collection
	collection = mongoclient.Database("Insurify").Collection("Metrics")
	metricservice = services.NewMetricService(collection, ctx)
	metricscontroller = controllers.NewMetric(metricservice)

	// Insurify Claims Collection
	collection = mongoclient.Database("Insurify").Collection("Claims")
	claimsservice = services.NewClaimsService(collection, ctx)
	claimscontroller = controllers.NewClaim(claimsservice)

	server = gin.Default()
}

func main() {
	defer mongoclient.Disconnect(ctx)

	// Create a new gin.Engine instance
	server = gin.Default()

	// Configure CORS middleware
	frontend := os.Getenv("FRONTEND_URL")
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{frontend}                                           // Replace with your actual frontend domain
	config.AllowMethods = []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"} // Allow the HTTP methods you are using
	config.AllowHeaders = []string{"Authorization", "Content-Type"}                    // Allow the headers your application uses
	config.ExposeHeaders = []string{"Content-Length"}                                  // Expose any additional headers you want to access in your frontend

	// Create a new CORS middleware with the configured options
	corsMiddleware := cors.New(config)

	// Use the CORS middleware in your Gin server
	server.Use(corsMiddleware)

	// Define your routes
	basepath := server.Group("/")
	usercontroller.RegisterUserRoutes(basepath)
	policycontroller.RegisterPolicyRoutes(basepath)
	metricscontroller.RegisterMetricRoutes(basepath)
	claimscontroller.RegisterClaimsRoutes(basepath)

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	// Add your routes here
	routes.UserRoutes(server)

	server.Use(middleware.Authentication())

	server.Run(":" + port)
}
