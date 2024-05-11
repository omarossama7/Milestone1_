const Order = require('../models/Order'); 
const Product = require('../models/Product') 

exports.placeOrder = async (req, res) => {
    const { userId } = req.params;
    const { productId } = req.body;
    console.log("1",productId)
    if (!productId) {
        return res.status(400).send({ message: "No product specified" });
    }
    console.log("2",productId)

    try {
        // Check if there's an existing order for the user
        const existingOrder = await Order.findOne({ user: userId, status: 'Pending' });
        if (existingOrder) {
            return res.status(400).send({ message: "There's already a pending order for this user" });
        }
        console.log("2",productId)

        // Fetch product details
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        console.log("2",product.product_name)

        // Create a new order
        const newOrder = new Order({
            user: userId,
            products: product.product_name, // Store only the name of the product
            orderDate: new Date(),
            status: 'Pending'
        });
        console.log(product.product_name)
        
        const savedOrder = await newOrder.save();
        console.log("saved")
        res.status(201).send(savedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getOrdersByUser = async (req, res) => {
    const {userId} = req.params;  
    try {
        const orders = await Order.find({ user: userId });
        if (orders.length === 0) {
            return res.status(404).send({ message: "No orders found for this user" });
        }
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = exports;
