const express = require('express');
const { getAllUsers, addUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Admin-only routes
router.get('/', authMiddleware, (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, getAllUsers);

router.post('/add', authMiddleware, (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}, addUser);

module.exports = router;
