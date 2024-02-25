package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/models"
	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/services"
)

type PolicyController struct {
	PolicyService services.PolicyService
}

func NewPolicy(policyservice services.PolicyService) PolicyController {
	return PolicyController{
		PolicyService: policyservice,
	}
}

func (pc *PolicyController) CreatePolicy(ctx *gin.Context) {
	var policy models.Policy
	if err := ctx.ShouldBindJSON(&policy); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}
	err := pc.PolicyService.CreatePolicy(&policy)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"message": "success"})
}

func (pc *PolicyController) GetPolicy(ctx *gin.Context) {
	policyname := ctx.Param("name")
	policy, err := pc.PolicyService.GetPolicy(&policyname)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, policy)
}

func (pc *PolicyController) GetAll(ctx *gin.Context) {
	policy, err := pc.PolicyService.GetAll()
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, policy)
}

func (pc *PolicyController) UpdatePolicy(ctx *gin.Context) {
	var policy models.Policy
	if err := ctx.ShouldBindJSON(&policy); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}
	err := pc.PolicyService.UpdatePolicy(&policy)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"message": "success"})
}

func (pc *PolicyController) DeletePolicy(ctx *gin.Context) {
	policyname := ctx.Param("name")
	err := pc.PolicyService.DeletePolicy(&policyname)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, gin.H{"message": "success"})
}

func (pc *PolicyController) RegisterPolicyRoutes(rg *gin.RouterGroup) {
	policyroute := rg.Group("/policy")
	policyroute.POST("/create", pc.CreatePolicy)
	policyroute.GET("/get/:id", pc.GetPolicy)
	policyroute.GET("/getall", pc.GetAll)
	policyroute.PATCH("/update", pc.UpdatePolicy)
	policyroute.DELETE("/delete/:id", pc.DeletePolicy)
}
