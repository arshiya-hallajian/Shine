let mongoose = require('mongoose');

//create login and signup schema
let tokenSchema = new mongoose.Schema({
    toekn: {
        type: String,
        required: true
    },
    _customerId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    tokenType: {
        type: String,
        eval: ['login', 'resetpassword']
    },
}, {timestamps: true});


const token_model = mongoose.model('tokens',  tokenSchema);

module.exports = token_model;