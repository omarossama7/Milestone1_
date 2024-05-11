const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  productId: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('Order', OrderSchema);
