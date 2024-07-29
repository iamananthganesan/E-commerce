const productModel = require("../models/productModel");
//To retrive all the products list form products collection
//To GET all the products from api/v1/products
exports.getProducts = async (request, response, next) => {
    const products = await ProductModel.find({});
    response.json({
        products,
        success: true
    })
}

//To GET single products from api/v1/product/id
exports.getSingleProduct = async (request, response, next) => {
    try {
        const productRequestbody = request.params.id;
        const product = await productModel.findById(productRequestbody)
        response.json({
            product,
            success: true,
            message: "you will get single product details"
        });
    }
    catch(error){
        response.status(404).json({            
            success: false,
            message: error.message,
            //custom error message
            message: "unable to fetch the product"
        });
    }    
}
