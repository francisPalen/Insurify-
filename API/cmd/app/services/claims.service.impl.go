package services

import (
	"context"
	"errors"

	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type ClaimsServiceImpl struct {
	claimsCollection *mongo.Collection
	ctx              context.Context
}

func NewClaimsService(claimsCollection *mongo.Collection, ctx context.Context) ClaimsService {
	return &ClaimsServiceImpl{
		claimsCollection: claimsCollection,
		ctx:              ctx,
	}
}

func (p *ClaimsServiceImpl) GetClaim(id *string) (*models.Claims, error) {
	var user *models.Claims
	// Convert the string ID to ObjectID
	objID, err := primitive.ObjectIDFromHex(*id)
	if err != nil {
		return nil, err
	}
	// Construct the query to find the user by _id
	query := bson.M{"_id": objID}
	// Execute the query and decode the result into the user variable
	err = p.claimsCollection.FindOne(p.ctx, query).Decode(&user)
	// Handle any errors that occurred during the query
	if err != nil {
		return nil, err
	}
	return user, nil
}

func (p *ClaimsServiceImpl) GetAll() ([]*models.Claims, error) {
	var claims []*models.Claims
	cursor, err := p.claimsCollection.Find(p.ctx, bson.D{{}})
	if err != nil {
		return nil, err
	}
	for cursor.Next(p.ctx) {
		var claim1 models.Claims
		err := cursor.Decode(&claim1)
		if err != nil {
			return nil, err
		}
		claims = append(claims, &claim1)
	}

	if err := cursor.Err(); err != nil {
		return nil, err
	}

	cursor.Close(p.ctx)

	if len(claims) == 0 {
		return nil, errors.New("documents not found")
	}
	return claims, err
}

func (m *ClaimsServiceImpl) GetClaimsByUserId(userID *string) (*models.Claims, error) {
	var claims *models.Claims
	query := bson.D{{Key: "user_id", Value: userID}}
	err := m.claimsCollection.FindOne(m.ctx, query).Decode(&claims)
	if err != nil {
		return nil, err
	}
	return claims, nil
}
