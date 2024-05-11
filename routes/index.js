const express = require('express');
require('dotenv').config();

const productController = require('../controllers/productsController');
const userController = require('../controllers/usersController');
const adminController = require('../controllers/adminController');
const ordersController= require('../controllers/ordersController');
const authMiddleware = require('../routes/authMiddleware');

const router = express.Router();

// Public routes
router.get('/products', productController.getAllProducts);//
router.get('/products/:id', productController.getProductById);//

// User routes
router.post('/users/login', userController.loginUser);//
router.post('/users/register', userController.registerUser);//
router.post('/order/:userId', authMiddleware, userController.createOrder);//
router.put('/users/:userId', authMiddleware, userController.updateUser);//

//Orders routes
router.post('/orders',authMiddleware, ordersController.placeOrder);
router.get('/orders', authMiddleware, ordersController.getOrdersByUser);


// Admin routes
router.post('/products', authMiddleware, adminController.createProduct); //
router.put('/products/:id', authMiddleware, adminController.updateProduct); //
router.delete('/products/:id', authMiddleware, adminController.deleteProduct);//

module.exports = router;
