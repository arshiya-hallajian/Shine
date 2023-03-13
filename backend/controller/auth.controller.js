const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user")


module.exports.login = (req, res) => {
    res.send("login")
}

module.exports.signup = async(req, res) => {
    // res.send(req.body)

    const hashPassword = await bcrypt.hash(req.body.password, 10)
    const user = new User({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        password: hashPassword
    })

    const userCheck = await User.findOne({email : req.body.email}).exec();
    if(!userCheck) res.status(400).json({
        status: false,
        error: "user exist"
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
    res.send("logout")
}

module.exports.userlist = (req, res) => {
    res.send("userlist")
}