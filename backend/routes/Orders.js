const express = require("express");
const orderRouter = express.Router();
//Importing the order controller
const { createOrder } =  require("../controllers/Order.controller");


//Post call for the orders!!!
orderRouter.route('/orders').post(createOrder);

module.exports = orderRouter;