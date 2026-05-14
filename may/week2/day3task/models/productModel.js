
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "kindly fill the name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "kindly fill the description"]
    },
    price: {
        type: Number,
        required: [true, "kindly fill the price"]
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true }); 

const Product = mongoose.model("Product", productSchema);
module.exports = Product;


