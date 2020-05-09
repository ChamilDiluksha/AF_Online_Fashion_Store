const express = require("express");
const WishlistRouter = express.Router();
const WishlistController = require('../../controllers/WishlistController/WishlistController');

WishlistRouter.post("/create", WishlistController.addItem);
WishlistRouter.get("/", WishlistController.getAllItems);
WishlistRouter.delete("/delete/:id", WishlistController.deleteItem);

module.exports = WishlistRouter;
