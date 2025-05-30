const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 

// Define the User Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add a username'], 
    unique: true, 
    trim: true, 
    minlength: [3, 'Username must be at least 3 characters long'] 
  },
  email: {
    type: String,
    required: [true, 'Please add an email'], 
    unique: true, 
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, // email validation
      'Please add a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add a password'], 
    minlength: [6, 'Password must be at least 6 characters long'], 
    select: false,
  createdAt: {
    type: Date,
    default: Date.now 
  },
  token: {
    type: String,
    select: false 
  }
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

// compare entered password in the database
UserSchema.methods.matchPassword = async function(enteredPassword) {
  // Compare the provided password 
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);

