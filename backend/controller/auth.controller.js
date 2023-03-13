
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user")


// user login
module.exports.login = async (req, res) => {
  const email = req.body.email;


  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      return res
        .status(404)
        .json({ success: false, message: "Password wrong" });
    }

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


module.exports.signup = async(req, res) => {
    // res.send(req.body)

    const hashPassword = await bcrypt.hash(req.body.password, 10)

    const user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password: hashPassword,
    })

    const userCheck = await User.findOne({email : req.body.email}).exec();
    if(userCheck) res.status(400).json({
        status: false,
        error: "user exists"
    })

    try{
        const saveUser = await user.save();
        res.status(200).json({
            status: true
        });
    }catch(e){
        res.status(403).json({
            status: false,
            error: e
        })
    }
}


module.exports.logout = (req, res) => {
  res.send("logout");
};

module.exports.userlist = (req, res) => {
  res.send("userlist");
};
