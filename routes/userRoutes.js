const express = require('express');
const { getUserProfile,getAllUsers } = require('../controllers/userController'); 
const { protect } = require('../middlewares/authMiddleware'); 

const router = express.Router(); 

router.get('/profile', protect, getUserProfile); 
router.get('/profiles', getAllUsers); 
module.exports = router;

