const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')
const {getMe, updateMe} = require('../controller/profile.controller')

//return all information about user
router.get('/getme',authMiddleware, getMe);

//update user information
router.put('/getme', authMiddleware , updateMe)


module.exports = router