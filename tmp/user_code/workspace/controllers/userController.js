const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Order = require('../models/Order');

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid email or password.');

  const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, 'jwtPrivateKey');
  res.send(token);
};

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.send(order);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user._id });
  res.send(orders);
};
