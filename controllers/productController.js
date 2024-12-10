const Product = require('../models/Product');

// Add a new product (Admin only)
exports.addProduct = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const product = new Product({ name, description, price, stock });
        await product.save();
        res.status(201).json({ message: 'Product added successfully!', product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all products (Available for all users)
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
