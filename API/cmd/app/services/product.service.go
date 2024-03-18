package services

import "gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/models"

type ProductService interface {
	GetProduct(*string) (*models.Product, error)
	GetAll() ([]*models.Product, error)
}
