package services

import (
	"context"
	"errors"

	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type ProductServiceImpl struct {
	productCollection *mongo.Collection
	ctx               context.Context
}

func NewProductService(productCollection *mongo.Collection, ctx context.Context) ProductService {
	return &ProductServiceImpl{
		productCollection: productCollection,
		ctx:               ctx,
	}
}

func (p *ProductServiceImpl) GetProduct(id *string) (*models.Product, error) {
	var user *models.Product
	// Convert the string ID to ObjectID
	objID, err := primitive.ObjectIDFromHex(*id)
	if err != nil {
		return nil, err
	}
	// Construct the query to find the user by _id
	query := bson.M{"_id": objID}
	// Execute the query and decode the result into the user variable
	err = p.productCollection.FindOne(p.ctx, query).Decode(&user)
	// Handle any errors that occurred during the query
	if err != nil {
		return nil, err
	}
	return user, nil
}

func (p *ProductServiceImpl) GetAll() ([]*models.Product, error) {
	var products []*models.Product
	cursor, err := p.productCollection.Find(p.ctx, bson.D{{}})
	if err != nil {
		return nil, err
	}
	for cursor.Next(p.ctx) {
		var product models.Product
		err := cursor.Decode(&product)
		if err != nil {
			return nil, err
		}
		products = append(products, &product)
	}

	if err := cursor.Err(); err != nil {
		return nil, err
	}

	cursor.Close(p.ctx)

	if len(products) == 0 {
		return nil, errors.New("documents not found")
	}
	return products, err
}
