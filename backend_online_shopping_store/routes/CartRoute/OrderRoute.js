const express = require("express");
const OrderRoute = express.Router();
const OrderController = require("../../controllers/CartController/OrderController");

OrderRoute.post("/create", OrderController.addOrder);
OrderRoute.post("/getOrderHistory", OrderController.userInOrder);
// OrderRoute.get("/:id", OrderController.getManager);
// OrderRoute.put("/update/:id", OrderController.editManager);
// OrderRoute.delete("/delete/:id", OrderController.deleteManager);

module.exports = OrderRoute;
