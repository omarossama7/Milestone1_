const express = require('express');
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Public routes
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);

// Private routes
router.post('/login', userController.login);
router.post('/orders', authMiddleware, userController.createOrder);
router.get('/orders', authMiddleware, userController.getOrders);

// Admin routes
router.post('/products', authMiddleware, adminController.createProduct);
router.put('/products/:id', authMiddleware, adminController.updateProduct);
router.delete('/products/:id', authMiddleware, adminController.deleteProduct);

module.exports = router;
