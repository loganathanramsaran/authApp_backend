require('dotenv').config(); 

const config = {
  port: process.env.PORT || 6000, 
  mongoURI: process.env.MONGO_URI, 
  jwtSecret: process.env.JWT_SECRET, 
}

module.exports = config;

