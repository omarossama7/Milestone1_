const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const usersController = require('../controllers/usersController');
const ordersController = require('../controllers/ordersController');
const authenticateToken = require('../middleware/authenticateToken');
const adminCheck = require('../middleware/adminCheck');

// Public routes
router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProductById);
router.post('/users/login', usersController.login);
router.post('/users/register', usersController.register);

// Private routes - require authentication
router.post('/orders', authenticateToken, ordersController.placeOrder);
router.get('/orders', authenticateToken, ordersController.getOrdersByUser);
router.put('/users/:id', authenticateToken, usersController.updateUser);

// Admin-only routes - require authentication and admin status
router.post('/products', [authenticateToken, adminCheck], productsController.addProduct);
router.put('/products/:id', [authenticateToken, adminCheck], productsController.updateProduct);
router.delete('/products/:id', [authenticateToken, adminCheck], productsController.deleteProduct);

module.exports = router;
