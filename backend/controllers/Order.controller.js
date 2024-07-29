const orderModel = require("../models/orderModel")

exports.createOrder = (request, response, next) => {
    const cartItems = request.body;
    const amount = cartItems.reduce((accumulator, orders)=>{
        accumulator + orders.product.price * orders.quantiy
    },0)   
console.log(amount)
    //orderModel.create()
    response.json({
        success: true,
        message: "successfully getting the ordered details"
    })
}
