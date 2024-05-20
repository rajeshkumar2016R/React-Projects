const express = require("express");

const productController = require("../Controller/product");
const Router = express.Router();


Router
  .post("/products", productController.createProduct)
  .get("/products", productController.getAllProducts)
  .get("/products/:id", productController.getProduct)
  .put("/products/:id", productController.replaceProduct)
  .patch("/products/:id", productController.updateProduct)
  .delete("/products/:id", productController.deleteProduct);

exports.Router = Router;