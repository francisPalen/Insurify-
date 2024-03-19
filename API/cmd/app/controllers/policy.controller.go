package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
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

func (pc *PolicyController) GetPolicy(ctx *gin.Context) {
	policyid := ctx.Param("id")
	policy, err := pc.PolicyService.GetPolicy(&policyid)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, policy)
}

func (pc *PolicyController) GetProduct(ctx *gin.Context) {
	productid := ctx.Param("id")
	product, err := pc.PolicyService.GetProduct(&productid)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, product)
}

func (pc *PolicyController) GetAll(ctx *gin.Context) {
	policy, err := pc.PolicyService.GetAll()
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, policy)
}

func (pc *PolicyController) GetPolicyByUserId(ctx *gin.Context) {
	userID := ctx.Param("user_id")
	policy, err := pc.PolicyService.GetPolicyByUserId(&userID)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, policy)
}

func (pc *PolicyController) GetPDFByUserId(ctx *gin.Context) {
	userID := ctx.Param("user_id")
	pdfData, err := pc.PolicyService.ServePDFByUserId(&userID)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	ctx.Data(http.StatusOK, "application/pdf", pdfData)
}

func (pc *PolicyController) RegisterPolicyRoutes(rg *gin.RouterGroup) {
	policyroute := rg.Group("/policy")
	policyroute.GET("/get/:id", pc.GetPolicy)
	policyroute.GET("/get/product/:id", pc.GetProduct)
	policyroute.GET("/getall", pc.GetAll)
	policyroute.GET("/get/user/:user_id", pc.GetPolicyByUserId)
	policyroute.GET("/get/pdf/user/:user_id", pc.GetPDFByUserId)
}
