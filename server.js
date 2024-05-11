const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');
const connectDB = require('./database.js'); // Adjust the path as necessary

// Load environment variables from .env file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Body parser middleware
app.use(bodyParser.json());

// API routes
app.use('/api', apiRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
