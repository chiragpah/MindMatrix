const express = require("express")
const { authorizeRoles, isAuthenticated } = require("../middleware/auth");
const { getNotifications, updateNotification, createNotification, deleteNotification } = require("../Controllers/notification.controller");
const notificationRoute = express.Router();
notificationRoute.get("/get-all-notifications", isAuthenticated, authorizeRoles("admin"), getNotifications);
notificationRoute.put("/update-notification/:id", isAuthenticated, authorizeRoles("admin"), updateNotification);
notificationRoute.post("/post-notification", isAuthenticated, createNotification);
notificationRoute.delete("/delete-notification/:id", isAuthenticated, authorizeRoles("admin"), deleteNotification);

module.exports = notificationRoute;