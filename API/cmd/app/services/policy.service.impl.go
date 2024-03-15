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
	policycollection *mongo.Collection
	ctx              context.Context
}

func NewPolicyService(policycollection *mongo.Collection, ctx context.Context) PolicyService {
	return &PolicyServiceImpl{
		policycollection: policycollection,
		ctx:              ctx,
	}
}

func (p *PolicyServiceImpl) CreatePolicy(policy *models.Policy) error {
	_, err := p.policycollection.InsertOne(p.ctx, policy)
	return err
}

func (p *PolicyServiceImpl) GetPolicy(name *string) (*models.Policy, error) {
	var policy *models.Policy
	query := bson.D{bson.E{Key: "name", Value: name}}
	err := p.policycollection.FindOne(p.ctx, query).Decode(&policy)
	return policy, err
}

func (p *PolicyServiceImpl) GetAll() ([]*models.Policy, error) {
	var policies []*models.Policy
	cursor, err := p.policycollection.Find(p.ctx, bson.D{{}})
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

func (p *PolicyServiceImpl) DeletePolicy(id *string) error {
	filter := bson.D{primitive.E{Key: "id", Value: id}}
	result, _ := p.policycollection.DeleteOne(p.ctx, filter)
	if result.DeletedCount != 1 {
		return errors.New("no matched document found for delete")
	}
	return nil
}
func (p *PolicyServiceImpl) UpdatePolicy(policy *models.Policy) error {
	filter := bson.D{primitive.E{Key: "_id", Value: policy.ID}}
	update := bson.D{primitive.E{Key: "$set", Value: bson.D{
		primitive.E{Key: "product_id", Value: policy.ProductID},
		primitive.E{Key: "user_id", Value: policy.UserID},
		primitive.E{Key: "first_name", Value: policy.FirstName},
		primitive.E{Key: "last_name", Value: policy.LastName},
		primitive.E{Key: "premium", Value: policy.PolicyPremium},
		primitive.E{Key: "start_date", Value: policy.StartDate},
		primitive.E{Key: "end_date", Value: policy.EndDate},
	}}}
	result, err := p.policycollection.UpdateOne(p.ctx, filter, update)
	if err != nil {
		return err
	}
	if result.MatchedCount != 1 {
		return errors.New("no matched document found for update")
	}
	return nil
}
