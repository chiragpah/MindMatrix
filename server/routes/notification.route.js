const express=require("express")
const { authorizeRoles, isAuthenticated }=require("../middleware/auth");
const { getNotifications, updateNotification }=require("../controllers/notification.controller");
const notificationRoute = express.Router();
notificationRoute.get("/get-all-notifications",isAuthenticated,authorizeRoles("admin"),getNotifications);
notificationRoute.put("/update-notification/:id", isAuthenticated, authorizeRoles("admin"), updateNotification);

module.exports=notificationRoute;