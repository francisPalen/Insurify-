package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gitlab-se.eeecs.qub.ac.uk/CSC3032-2324/CSC3032-2324-TEAM15/cmd/app/services"
)

type MetricsController struct {
	MetricsService services.MetricsService
}

func NewMetric(metricsservice services.MetricsService) MetricsController {
	return MetricsController{
		MetricsService: metricsservice,
	}
}

func (mc *MetricsController) GetAllMetrics(ctx *gin.Context) {
	metricid := ctx.Param("id")
	metrics, err := mc.MetricsService.GetAllMetrics(&metricid)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, metrics)
}

func (mc *MetricsController) GetCarMetrics(ctx *gin.Context) {
	metricid := ctx.Param("id")
	metrics, err := mc.MetricsService.GetCarMetrics(&metricid)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, metrics)
}

func (mc *MetricsController) GetHomeMetrics(ctx *gin.Context) {
	metricid := ctx.Param("id")
	metrics, err := mc.MetricsService.GetHomeMetrics(&metricid)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, metrics)
}

func (mc *MetricsController) GetLifeMetrics(ctx *gin.Context) {
	metricid := ctx.Param("id")
	metrics, err := mc.MetricsService.GetLifeMetrics(&metricid)
	if err != nil {
		ctx.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, metrics)
}

func (mc *MetricsController) RegisterMetricRoutes(rg *gin.RouterGroup) {
	policyroute := rg.Group("/metrics")
	policyroute.GET("/get/:id", mc.GetAllMetrics)
	policyroute.GET("/get/car/:id", mc.GetCarMetrics)
	policyroute.GET("/get/home:id", mc.GetHomeMetrics)
	policyroute.GET("/get/life:id", mc.GetLifeMetrics)
}
