const express = require('express');
const router = express.Router();
const {login, signup , logout , userList, resetPassword, forgetPassword, logoutAll} = require("../controller/auth.controller");
const authMiddleware = require("../middleware/auth.middleware")

//login router
router.post("/login",login);

//signup router
router.post("/signup",signup);

//logout router
router.get("/logout", authMiddleware , logout);

//logout All router
router.get("/logoutAll", authMiddleware, logoutAll);

//getting user list router
router.get("/", authMiddleware, userList);

//forget password router
router.post("/forgetPassword", forgetPassword);

//reset password router
router.post("/resetPassword", resetPassword);


module.exports = router;