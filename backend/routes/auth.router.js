const express = require('express');
const router = express.Router();
const {login, signup , logout , userList, forgetpassword} = require("../controller/auth.controller");
const authMiddleware = require("../middleware/auth.middleware")

//login router
router.post("/login",login);

//signup router
router.post("/signup",signup);

//logout router
router.get("/logout", logout);

//getting user list router
router.get("/", authMiddleware, userList);

//reset password router
router.post("/forgetPassword", forgetpassword);

// router.post("/forgetpassword/:userId/:token", changepassword);


module.exports = router;