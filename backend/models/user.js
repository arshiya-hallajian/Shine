let mongoose = require('mongoose');

//create login and signup schema
let UserRigester = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    verifyPassword: String,
}, {timestamps: true});

let UserLogin = new mongoose.Schema({
    email: String,
    password: String,
}, {timestamps: true});

mongoose.model('User',  UserRigester, UserLogin);

module.exports = UserRigester, UserLogin;