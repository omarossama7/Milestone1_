const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;
const User = require('../models/User');
const Order = require('../models/Order');

exports.registerUser = async (req, res) => {
    try {
        const { username, email, date_of_birth, password } = req.body;

        const [day, month, year] = date_of_birth.split('/').map(Number);
        const parsedDateOfBirth = new Date(year, month - 1, day);
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const newUser = new User({ username, email, date_of_birth: parsedDateOfBirth, password });
        await newUser.save();

        res.status(201).send('User registered');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await User.findOne({ name, password });
        if (!user) return res.status(401).send('Invalid credentials');

        // Generate access token with user's name as payload
        const accessToken = jwt.sign({ name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ accessToken });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

exports.createOrder = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { productId } = req.body;
        const order = new Order({
            userId: userId,
            productId: productId
        });
        await order.save();
        res.send(order);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.userId; // Assuming the user ID is passed as a parameter

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        user.date_of_birth = req.body.date_of_birth || user.date_of_birth;
        user.password = req.body.password || user.password;

        await user.save();

        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
