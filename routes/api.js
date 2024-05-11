// const express = require('express');
// const router = express.Router();
// const productsController = require('../controllers/productsController');
// const usersController = require('../controllers/usersController');
// const ordersController = require('../controllers/ordersController');
// const authenticateToken = require('../routes/authenticateToken');
// const adminController = require('../controllers/adminController');

// // Public routes


// // Private routes - require authentication
// router.post('/orders', authenticateToken, ordersController.placeOrder);
// router.get('/orders', authenticateToken, ordersController.getOrdersByUser);
// router.put('/users/:id', authenticateToken, usersController.updateUser);

// // Admin-only routes - require authentication and admin status
// router.post('/Product', [authenticateToken, adminController.adminCheck], adminController.createProduct);
// router.put('/Product/:id', [authenticateToken, adminController.adminCheck], adminController.updateProduct);
// router.delete('/Product/:id', [authenticateToken, adminController.adminCheck], adminController.deleteProduct);

// module.exports = router;
