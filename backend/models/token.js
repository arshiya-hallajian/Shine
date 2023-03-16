let mongoose = require('mongoose');

//create login and signup schema
let tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    _userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    tokenType: {
        type: String,
        eval: ['login', 'forgetpassword']
    },
}, {timestamps: true});


const token_model = mongoose.model('tokens',  tokenSchema);

module.exports = token_model;