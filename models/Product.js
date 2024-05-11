const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product_name: String,
  price: Number,
  details: String
});

module.exports = mongoose.model('Product', ProductSchema);
