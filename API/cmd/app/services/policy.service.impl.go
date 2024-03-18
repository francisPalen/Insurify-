package services

import (
	"context"
	"errors"

	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type PolicyServiceImpl struct {
	policyCollection *mongo.Collection
	ctx              context.Context
}

func NewPolicyService(policyCollection *mongo.Collection, ctx context.Context) PolicyService {
	return &PolicyServiceImpl{
		policyCollection: policyCollection,
		ctx:              ctx,
	}
}

func (p *PolicyServiceImpl) GetPolicy(id *string) (*models.Policy, error) {
	var user *models.Policy
	// Convert the string ID to ObjectID
	objID, err := primitive.ObjectIDFromHex(*id)
	if err != nil {
		return nil, err
	}
	// Construct the query to find the user by _id
	query := bson.M{"_id": objID}
	// Execute the query and decode the result into the user variable
	err = p.policyCollection.FindOne(p.ctx, query).Decode(&user)
	// Handle any errors that occurred during the query
	if err != nil {
		return nil, err
	}
	return user, nil
}

func (p *PolicyServiceImpl) GetAll() ([]*models.Policy, error) {
	var policies []*models.Policy
	cursor, err := p.policyCollection.Find(p.ctx, bson.D{{}})
	if err != nil {
		return nil, err
	}
	for cursor.Next(p.ctx) {
		var policy models.Policy
		err := cursor.Decode(&policy)
		if err != nil {
			return nil, err
		}
		policies = append(policies, &policy)
	}

	if err := cursor.Err(); err != nil {
		return nil, err
	}

	cursor.Close(p.ctx)

	if len(policies) == 0 {
		return nil, errors.New("documents not found")
	}
	return policies, err
}

func (p *PolicyServiceImpl) UpdatePolicy(policy *models.Policy) error {
	filter := bson.D{primitive.E{Key: "_id", Value: policy.ID}}
	update := bson.D{primitive.E{Key: "$set", Value: bson.D{
		primitive.E{Key: "product_id", Value: policy.Product_id},
		primitive.E{Key: "user_id", Value: policy.User_id},
		primitive.E{Key: "first_name", Value: policy.First_name},
		primitive.E{Key: "last_name", Value: policy.Last_name},
		primitive.E{Key: "premium", Value: policy.Premium},
		primitive.E{Key: "start_date", Value: policy.Start_date},
		primitive.E{Key: "end_date", Value: policy.End_date},
	}}}
	result, err := p.policyCollection.UpdateOne(p.ctx, filter, update)
	if err != nil {
		return err
	}
	if result.MatchedCount != 1 {
		return errors.New("no matched document found for update")
	}
	return nil
}
