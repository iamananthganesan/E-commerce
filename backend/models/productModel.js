const mongoose = require("mongoose");


//Creating Schema for Products
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: String,
    description: String,
    rating: String,
    images: [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: String,
    noOfReviews: String,
    createdAt: Date
})


//Model for Product
//Product — Name for the model, so a collection will be created with a name 'products' (plural form of the name with all lowercase)
const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
