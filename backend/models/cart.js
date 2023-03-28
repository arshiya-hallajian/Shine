const mongoose = require('mongoose');


//
const cartSchema = new mongoose.Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    items: [{
        itemId:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'product'
        },
    name: {
        type: String,
        required: true
    },

    quantity : {
        type: Number,
        required: true,
        default: 0
    },
    price: Number
    
}],
checkout: {
    type: Number,
    required: true,
    default: 0
}
});

const cart_model = mongoose.model('cart', cartSchema);

module.exports = cart_model;

