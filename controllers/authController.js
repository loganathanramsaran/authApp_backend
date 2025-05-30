const User = require('../models/User'); 
const { generateToken } = require('../utils/jwt'); 

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if a user with the given email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Check if a user with the given username already exists
    user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Create a new user instance
    user = new User({
      username,
      email,
      password, // Password will be hashed by the pre-save hook in the User model
    });

    // Save the user to the database
    await user.save();

    // Generate a token for the newly registered user
    const token = generateToken({ id: user._id, email: user.email });

    // Respond with user ID, username, email, and the generated token
    res.status(201).json({
      totalUsers: await User.countDocuments(), // Return total number of users
      message: 'User registered successfully',
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error(error);
    // Handle validation errors from Mongoose
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email, explicitly selecting the password field
    const user = await User.findOne({ email }).select('+password');

    // Check if user exists
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await user.matchPassword(password);

    // If passwords do not match
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a token for the authenticated user
    const token = generateToken({ id: user._id, email: user.email });

    // Respond with user ID, username, email, and the generated token
    res.status(200).json({
      message: 'Login successful',
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};

