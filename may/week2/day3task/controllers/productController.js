const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ 
            success: true, 
            count: products.length, 
            products 
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ success: true, product });
    } catch (error) {
        res.status(500).json({ message: "Invalid ID format", error: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const { name, price, description, isActive } = req.body;

        if (!name || !price || !description) {
            return res.status(400).json({ message: "Please fill all required fields" });
        }

        const existProduct = await Product.findOne({ name });
        if (existProduct) {
            return res.status(400).json({ message: "Product name already exists" });
        }

        const product = await Product.create({ name, price, description, isActive });
        res.status(201).json({ message: "Created successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Creation failed", error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        
        let product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        product = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true 
        });

        res.status(200).json({ message: "Updated successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Update failed", error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        await product.deleteOne();
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Delete failed", error: error.message });
    }
};

module.exports = { 
    getAllProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct 
};