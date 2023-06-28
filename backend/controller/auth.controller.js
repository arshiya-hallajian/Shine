const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Token = require("../models/token");
const crypto = require("crypto");
const sendMail = require("../services/sendemail");

// user login
module.exports.login = async (req, res) => {
  const email = req.body.email;

  try {
    //find user in database
    const user = await User.findOne({ email: email });
    //if user is not found
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // check the password and compare the password
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      return res
        .status(404)
        .json({ success: false, message: "Password wrong" });
    }
    //add jsonwebtoken
    const token = jwt.sign(
      {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
      "MySecretKey",
      {
        expiresIn: "1h",
      }
    );

    //add token to the collection
    await Token.findOneAndUpdate(
      {
        _userId: user._id,
        tokenType: "login",
      },
      {
        token,
      },
      {
        new: true,
        upsert: true,
      }
    );

    // send response
    res.status(200).json({
      status: true,
      data: {
        token,
        user,
      },
      message: "kir to programming",
      error: undefined,
    });
  } catch (err) {
    res.status(404).json({
      status: false,
      data: undefined,
      message: "error in database connecting",
      error: err,
    });
  }
};

//signup router function
module.exports.signup = async (req, res) => {
  //hashing password
  const hashPassword = await bcrypt.hash(req.body.password, 10);

  //create a new user model
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashPassword,
  });

  //check user in database existence
  const userCheck = await User.findOne({ email: req.body.email }).exec();
  if (userCheck)
    res.status(400).json({
      status: false,
      data: undefined,
      error: "user exists",
    });

  try {
    //save the user model into database
    const saveUser = await user.save();
    res.status(200).json({
      status: true,
      data: saveUser,
      error: undefined,
    });
  } catch (e) {
    res.status(403).json({
      status: false,
      data: undefined,
      error: e,
    });
  }
};

//logout user function
module.exports.logout = async (req, res) => {
  const removeToken = await Token.findOneAndDelete({
    _userId: req.userId,
    token: req.token,
    tokenType: "login",
  });
  if (!removeToken) {
    res.status(400).json({
      status: false,
      message: "user not found",
    });
  } else {
    res.status(200).json({
      status: true,
      message: "user removed successfully",
    });
  }
};

module.exports.logoutAll = async (req, res) => {
  const removeToken = await Token.findOneAndDelete({
    _userId: req.userId,
    tokenType: "login",
  });
  if (!removeToken) {
    res.status(400).json({
      status: false,
      message: "user not found",
    });
  } else {
    res.status(200).json({
      status: true,
      message: "user removed successfully",
    });
  }
};

module.exports.userList = async (req, res) => {
  try {
    const users = await User.findOne({}).exec();
    res.status(200).json({
      status: true,
      data: users,
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      data: e,
    });
  }
};

//forget password controller
module.exports.forgetPassword = async (req, res) => {
  //find user in database
  const user = await User.findOne({ email: req.body.email }).exec();
  if (!user) return res.status(400).send("email not found");

  //find token and create hash
  await Token.findOneAndDelete({ _userId: user._id });
  const cryptedToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(cryptedToken, 10);

  //create new token model
  const tokenModel = new Token({
    token: hash,
    _userId: user._id,
    tokenType: "forgetPassword",
  });
  //send token in database
  await tokenModel.save();
  //send link with email
  const link = `localhost:4001/api/auth/resetPassword/?userid=${user._id}&token=${cryptedToken}`;

  await sendMail(user.email, "password reset", link);
  res.status(200).json({
    status: true,
    message: "email sended",
  });
};

module.exports.resetPassword = async (req, res) => {
  const token = req.query.token;
  const userId = req.query.userid;
  const password = req.body.password;

  //check token in TokenCollection
  const resetPasswordToken = await Token.findOne({ _userId: userId });
  if (!resetPasswordToken) {
    return res.status(400).json({
      status: false,
      message: "Invalid or Expired Token",
    });
  }

  //compare hashed pass and token
  const checkToken = await bcrypt.compare(token, resetPasswordToken.token);
  if (!checkToken) {
    return res.status(400).json({
      status: false,
      message: "Invalid or Expired Token",
    });
  }

  //hash new password
  const hashedPassword = await bcrypt.hash(password, 10);

  //change user password
  const changeUserPassword = await User.updateOne(
    { _id: userId },
    { $set: { password: hashedPassword } },
    { new: true }
  );
  if (!changeUserPassword) {
    return res.status(400).json({
      status: false,
      message: "database error",
    });
  }

  //take user data from database
  const user = await User.findById(resetPasswordToken._userId).exec();
  if (!user) {
    return res.status(400).json({
      status: false,
      message: "database error",
    });
  }
  //take user data from database
  const removeToken = await Token.findByIdAndRemove(user._id);
  if (!removeToken) {
    return res.status(400).json({
      status: false,
      message: "database error",
    });
  }

  //send email that password changed
  await sendMail(user.email, "notice", "your password has been reset");
  res.status(200).json({
    status: true,
    message: "password reseted",
  });
};
