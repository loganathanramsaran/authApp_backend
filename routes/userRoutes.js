const express = require('express');
const { getUserProfile,getAllUsers } = require('../controllers/userController'); 
const { protect } = require('../middlewares/authMiddleware'); 

const router = express.Router(); 

router.get('/profile', protect, getUserProfile); // Apply 'protect' middleware before 'getUserProfile'
router.get('/profiles', getAllUsers); // Get all users
module.exports = router;

