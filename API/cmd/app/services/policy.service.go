package services

import "gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/models"

type PolicyService interface {
	GetPolicy(*string) (*models.Policy, error)
	GetProduct(*string) (*models.Policy, error)
	GetAll() ([]*models.Policy, error)
	GetPolicyByUserId(*string) (*models.Policy, error)
	ServePDFByUserId(*string) ([]byte, error) // New method
}
