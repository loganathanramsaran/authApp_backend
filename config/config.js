require('dotenv').config(); // Load environment variables from .env file

const config = {
  port: process.env.PORT || 6000, // Default to 4000 if PORT is not set
  mongoURI: process.env.MONGO_URI, // MongoDB connection URI
  jwtSecret: process.env.JWT_SECRET, // Secret key for JWT
};

module.exports = config;

