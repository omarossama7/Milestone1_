const Order = require('../models/Order');  // Assuming you have an Order model

exports.placeOrder = async (req, res) => {
    const { userId, products } = req.body;
    if (!products || products.length === 0) {
        return res.status(400).send({ message: "No products specified" });
    }
    try {
        const newOrder = new Order({
            user: userId,
            products: products, 
            orderDate: new Date(),
            status: 'Pending'
        });
        await newOrder.save();
        res.status(201).send(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

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
