package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/services"
)

type ClaimsController struct {
	ClaimsService services.ClaimsService
}

func NewClaim(claimsservice services.ClaimsService) ClaimsController {
	return ClaimsController{
		ClaimsService: claimsservice,
	}
}

func (cc *ClaimsController) GetClaim(ctx *gin.Context) {
	claimid := ctx.Param("id")
	claims, err := cc.ClaimsService.GetClaim(&claimid)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, claims)
}

func (cc *ClaimsController) GetAll(ctx *gin.Context) {
	claims, err := cc.ClaimsService.GetAll()
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, claims)
}

func (cc *ClaimsController) GetClaimsByUserId(ctx *gin.Context) {
	userID := ctx.Param("user_id")
	claims, err := cc.ClaimsService.GetClaimsByUserId(&userID)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, claims)
}

func (cc *ClaimsController) RegisterClaimsRoutes(rg *gin.RouterGroup) {
	claimsroute := rg.Group("/claims")
	claimsroute.GET("/get/:id", cc.GetClaim)
	claimsroute.GET("/getall", cc.GetAll)
	claimsroute.GET("/get/user/:user_id", cc.GetClaimsByUserId)
}
