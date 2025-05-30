require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_URI // MongoDB connection string
  };

// const config = {
//   port: process.env.PORT || 6000, 
//   jwtSecret: process.env.JWT_SECRET, 
// }

// module.exports = config;

