const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);
const connectDB = require('./database.js'); // Adjust the path as necessary

// Load environment variables from .env file
require('dotenv').config();


// Connect to the database
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
