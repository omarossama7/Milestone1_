const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  products:Array,
  orderDate:String,
  status:String
});

module.exports = mongoose.model('Order', OrderSchema);
