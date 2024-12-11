const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected.');

        const products = [
            { name: 'Laptop', description: 'High-performance laptop', price: 1200, stock: 10 },
            { name: 'Smartphone', description: 'Latest model smartphone', price: 800, stock: 20 },
        ];

        await Product.insertMany(products);
        console.log('Products added!');
        process.exit();
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

connectDB();
