const Order = require('../models/Order');  // Assuming you have an Order model

// Controller to place a new order
exports.placeOrder = async (req, res) => {
    const { userId, products } = req.body;

    // Check if the user array and product arrays are provided
    if (!products || products.length === 0) {
        return res.status(400).send({ message: "No products specified" });
    }

    try {
        // Optionally, validate each product ID and availability here
        // and verify user ID

        // Create a new order
        const newOrder = new Order({
            user: userId,
            products: products, // Array of product objects or IDs
            orderDate: new Date(),
            status: 'Pending'
        });

        await newOrder.save();
        res.status(201).send(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get all orders by a specific user
exports.getOrdersByUser = async (req, res) => {
    const userId = req.user._id;  // Assuming userID is stored in JWT token

    try {
        const orders = await Order.find({ user: userId }).populate('products');
        if (orders.length === 0) {
            return res.status(404).send({ message: "No orders found for this user" });
        }
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = exports;
