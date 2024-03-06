const express=require("express")
const {isAuthenticated,authorizeRoles} =require("../middleware/auth");
const orderRouter = express.Router();
const orderController = require("../controllers/order.controller");


orderRouter.post("/create-order",isAuthenticated,orderController.createOrder);

orderRouter.get("/get-orders",isAuthenticated,authorizeRoles("admin"),orderController.getAllOrders);

// orderRouter.get("/payment/stripepublishablekey", sendStripePublishableKey);

// orderRouter.post("/payment", isAutheticated, newPayment);

module.exports= orderRouter;