const express = require("express")


const {authorizeRoles, isAuthenticated }=require("../middleware/auth");
const { getCoursesAnalytics, getOrderAnalytics, getUsersAnalytics } = require("../controllers/analytics.controller");
const analyticsRouter = express.Router();


analyticsRouter.get("/get-users-analytics", isAuthenticated,authorizeRoles("admin"), getUsersAnalytics);

analyticsRouter.get("/get-orders-analytics", isAuthenticated,authorizeRoles("admin"), getOrderAnalytics);

analyticsRouter.get("/get-courses-analytics", isAuthenticated,authorizeRoles("admin"), getCoursesAnalytics);


module.exports=analyticsRouter;