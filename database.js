const mongoose = require('mongoose');

// Using environment variables to manage the MongoDB URI
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connection successful');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
