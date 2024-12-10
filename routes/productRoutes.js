const express = require('express');
const { addProduct, getAllProducts } = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Admin-only routes
router.post('/add', authMiddleware, (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, addProduct);

// Normal user route to view products
router.get('/list', authMiddleware, (req, res) => {
    if (req.user.role !== 'normal') {
        return res.status(403).json({ message: 'Access denied' });
    }
    getAllProducts(req, res);
});

// Public routes
router.get('/', authMiddleware, getAllProducts);

module.exports = router;
