const express = require('express');
const router = express.Router();
const {
        getAllUsers, 
        getUserById, 
        loginUser, 
        registerUser, 
        updateUser,
        deleteUser,
        getCurrentUser,
        logoutUser
    } = require('../controllers/user.js');
const verifyUser = require('../middlewares/verifyUser.js');


router.get('/', getAllUsers); // Get all users
router.get('/:id', getUserById).put('/:id', verifyUser,updateUser).delete('/:id', verifyUser, deleteUser); 
router.get('/me', getCurrentUser); // Get current user


router.post('/login', loginUser); // Login user
router.post('/register', registerUser); // Register user

router.post('/logout', verifyUser, logoutUser); // Logout user

module.exports = router;