const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    sellerId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    picture: {
      type: Array,
      required: false
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const product_model = mongoose.model('products',  productSchema);

module.exports = product_model;
