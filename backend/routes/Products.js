const express = require("express");
const productRouter = express.Router();

const { getProducts } = require("../controllers/Product.controller");
const { getSingleProduct } = require("../controllers/Product.controller");


//Get complete product list
productRouter.route("/products").get(getProducts);
//Get single product
productRouter.route("/product/:id").get(getSingleProduct);

module.exports = productRouter;
