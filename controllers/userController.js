const User = require('../models/User');

// Get all users (Admin only)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new user (Admin only)
exports.addUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user = new User({ name, email, password, role });
        await user.save();
        res.status(201).json({ message: 'User added successfully!', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
