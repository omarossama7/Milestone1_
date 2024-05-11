const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send('Product deleted.');
};
