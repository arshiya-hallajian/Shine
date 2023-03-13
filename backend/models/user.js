let mongoose = require('mongoose');

//create login and signup schema
let User = new mongoose.Schema({
    firstname: {
        type: String,
        maxLength: 30
    },
    lastname: {
        type: String,
        maxLength: 30
    },
    email: {
        type: String,
        unique:true,
        require:true,
    },
    password: {
        type: String,
        minLength: 6
    },
}, {timestamps: true});


const user_model = mongoose.model('user',  User);

module.exports = user_model;