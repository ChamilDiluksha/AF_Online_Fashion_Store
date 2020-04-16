const express = require("express");
const ProductRouter = express.Router();
const ProductController = require('../../controllers/productController/productController');

ProductRouter.post("/uploadImage", ProductController.UploadImage);
ProductRouter.post("/create", ProductController.addProduct);
// ProductRouter.get("/", ProductController.getAllCategory);
// ProductRouter.get("/:id", ProductController.getCategory);
// ProductRouter.put("/update/:id", ProductController.editCategory);
// ProductRouter.delete("/delete/:id", ProductController.deleteCategory);

module.exports = ProductRouter;