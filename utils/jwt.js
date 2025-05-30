const jwt = require('jsonwebtoken');
const config = require('../config/config'); 

const generateToken = (payload) => {
  // Sign the token with the payload, JWT_SECRET from config, and an expiration time
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: '2h', // Token expires in 2 hour
  });
};

const verifyToken = (token) => {
  try {
    // Verify the token with the JWT_SECRET
    const decoded = jwt.verify(token, config.jwtSecret);
    return decoded; 
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};

