// middlewares/authMiddleware.js
const { verifyToken } = require('../utils/jwt'); // Import JWT verification utility
const User = require('../models/User'); // Import User model

/**
 * Middleware to protect routes.
 * Verifies the Bearer token from the Authorization header.
 * If valid, attaches the user to the request object (`req.user`).
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
 */
const protect = async (req, res, next) => {
  let token;

  // Check if the Authorization header exists and starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Extract the token from the Authorization header
      // Format: "Bearer TOKEN" -> split by space and take the second part
      token = req.headers.authorization.split(' ')[1];

      // Verify the token using the utility function
      const decoded = verifyToken(token);

      // Find the user by ID from the decoded token payload
      // .select('-password') excludes the password field from the returned user object
      req.user = await User.findById(decoded.id).select('-password');

      // If user is not found, throw an error
      if (!req.user) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      // Proceed to the next middleware or route handler
      next();
    } catch (error) {
      // Handle token verification errors (e.g., invalid token, expired token)
      console.error(error);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // If no token is found in the header
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };

