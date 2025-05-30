const User = require('../models/User'); 

const getUserProfile = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'getUserProfile-Server error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password field

    if (!users || users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    res.status(200).json({
      message: 'Users retrieved successfully',
      totalUsers: users.length,
      users});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'getAllUsers-Server error' });
  }
};

module.exports = {
  getUserProfile,
  getAllUsers
};

