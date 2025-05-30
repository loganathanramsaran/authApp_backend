const mongoose = require('mongoose');
const config = require('./config'); 

const connectDB = async () => {
      const conn = await mongoose.connect(config.mongoURI);
  try {
    console.log(`MongoDB Connected successfully`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // Exit the process with a failure code
    process.exit(1);
  }
};

module.exports = connectDB;

