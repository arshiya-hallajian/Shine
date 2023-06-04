const userModel = require('../models/user');
const bcrypt = require("bcrypt");


module.exports.getMe = async (req, res) => {
    try {
        const user = await userModel.findOne({_id: req.userId})
        if (!user) {
            res.status(404).json({
                status: false,
                data: "user not found"
            })
        }
        res.status(200).json({
            status: true,
            data: user
        })
    } catch (e) {
        res.status(404).json({
            status: false,
            data: e
        })
    }
}

module.exports.updateMe = async (req, res) => {

    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            picture: req.body.picture,
            password: hashPassword,
        }
        const obj = Object.keys(data);

        const user = await userModel.findOne({
            _id: req.userId
        })
        if (!user) {
            res.status(404).json({
                status: false,
                data: "user not found"
            })
        }
        console.log(data.lastname)
        obj.forEach((key) => {
            user[key] = obj[key];
            console.log(obj.key)
        })
        await user.save();

        res.status(200).json({
            status: true,
            data: user
        })
    } catch (e) {
        res.status(404).json({
            status: false,
            data: e
        })
    }
}

