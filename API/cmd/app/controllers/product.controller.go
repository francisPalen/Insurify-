package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/services"
)

type ProductController struct {
	ProductService services.ProductService
}

func NewProduct(productservice services.ProductService) ProductController {
	return ProductController{
		ProductService: productservice,
	}
}

func (pc *ProductController) GetProduct(ctx *gin.Context) {
	productid := ctx.Param("id")
	product, err := pc.ProductService.GetProduct(&productid)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, product)
}

func (pc *ProductController) GetAll(ctx *gin.Context) {
	product, err := pc.ProductService.GetAll()
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, product)
}

func (pc *ProductController) RegisterProductRoutes(rg *gin.RouterGroup) {
	productroute := rg.Group("/product")
	productroute.GET("/get/:id", pc.GetProduct)
	productroute.GET("/getall", pc.GetAll)
}
