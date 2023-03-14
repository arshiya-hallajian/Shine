const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user")

// user login
module.exports.login = async (req, res) => {
    const email = req.body.email;

    try {
        //find user in database
        const user = await User.findOne({email: email});
        //if user is not found
        if (!user) {
            return res
                .status(404)
                .json({success: false, message: "User not found"});
        }

        // check the password and compare the password
        const checkPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!checkPassword) {
            return res
                .status(404)
                .json({success: false, message: "Password wrong"});
        }
        //add jsonwebtoken
        const token = jwt.sign(
            {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
            },
            "MySecretKey"
        );

        // send response
        res.status(200).json({
            status: true,
            jwt: token,
            message: "kir to programming",
        });

    } catch (err) {
        res.status(404).send("5", err);
    }
};

//signup router function
module.exports.signup = async (req, res) => {

    //hashing password
    const hashPassword = await bcrypt.hash(req.body.password, 10)

    //create a new user model
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashPassword,
    })

    //check user in database existence
    const userCheck = await User.findOne({email: req.body.email}).exec();
    if (userCheck) res.status(400).json({
        status: false,
        error: "user exists"
    })

    try {
        //save the user model into database
        const saveUser = await user.save();
        res.status(200).json({
            status: true
        });
    } catch (e) {
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
