package main

import (
	"context"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/controllers"
	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/services"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
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

	mongoconn := options.Client().ApplyURI("mongodb+srv://marcvillareal30:jxzecGkV3ugG5w3Y@insurance.c0iumta.mongodb.net/")
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

	basepath := server.Group("/v1")
	usercontroller.RegisterUserRoutes(basepath)
	policycontroller.RegisterPolicyRoutes(basepath)

	log.Fatal(server.Run(":8080"))
}
