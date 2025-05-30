const mongoose = require('mongoose');
const config = require('./config'); 

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Log any errors that occur during connection
    console.error(`Error: ${error.message}`);
    // Exit the process with a failure code
    process.exit(1);
  }
};

module.exports = connectDB;

