// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // For password hashing

// Define the User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add a username'], // Username is required
    unique: true, // Username must be unique
    trim: true, // Trim whitespace
    minlength: [3, 'Username must be at least 3 characters long'] // Minimum length
  },
  email: {
    type: String,
    required: [true, 'Please add an email'], // Email is required
    unique: true, // Email must be unique
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, // Regex for email validation
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add a password'], // Password is required
    minlength: [6, 'Password must be at least 6 characters long'], // Minimum length
    select: false // Do not return password in queries by default
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically set creation date
  },
  token: {
    type: String,
    select: false // Do not return token in queries by default
  }
});

// Mongoose pre-save hook to hash the password before saving the user
UserSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) {
    next();
  }

  // Generate a salt (random string) for hashing
  const salt = await bcrypt.genSalt(10);
  // Hash the password using the generated salt
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare entered password with hashed password in the database
UserSchema.methods.matchPassword = async function(enteredPassword) {
  // Compare the provided password with the stored hashed password
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);

