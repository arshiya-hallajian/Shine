const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// user login
//get user email
module.exports.login = async (req, res) => {
  const email = req.body.email;
  
  //if user does't exist
  try {
    const user = await User.findOne({ email: email });
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
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
      "jhsahjahas"
    );

    res.status(200).json({
      status: true,
      jwt: token,
      message: "kir to programming",
    });

  } catch (err) {
    res.status(404).send("5", err);
  }
};

module.exports.signup = (req, res) => {
  res.send("signup");
};

module.exports.logout = (req, res) => {
  res.send("logout");
};

module.exports.userlist = (req, res) => {
  res.send("userlist");
};
