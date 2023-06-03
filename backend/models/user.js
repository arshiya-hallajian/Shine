let mongoose = require('mongoose');

//create login and signup schema
let User = new mongoose.Schema({
    firstname: {
        type: String,
        maxLength: 30,
        required: true
    },
    lastname: {
        type: String,
        maxLength: 30,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required:true,
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    },
    picture: {
        type: String,
        default: "http://localhost:4001/assets/profile/defpic.jpg"
    },
    date: {
        type: String,
        default: Date.now(),
    }
}, );


const user_model = mongoose.model('user',  User);

module.exports = user_model;

