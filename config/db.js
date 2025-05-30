const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
  try {
    console.log('Mongo URI:', config.mongoURI); // Debug log
    await mongoose.connect(config.mongoURI);
    console.log('MongoDB Connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
