const express = require("express");
const CategoryRoute = express.Router();
const CategoryController = require("../../controllers/AdminController/categoryController");

CategoryRoute.post("/create", CategoryController.addCategory);
CategoryRoute.get("/", CategoryController.getAllCategory);
CategoryRoute.get("/:id", CategoryController.getCategory);
CategoryRoute.put("/update/:id", CategoryController.editCategory);
CategoryRoute.delete("/delete/:id", CategoryController.deleteCategory);

module.exports = CategoryRoute;