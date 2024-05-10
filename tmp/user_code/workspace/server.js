const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/api-server', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Use routes
app.use('/api', routes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
