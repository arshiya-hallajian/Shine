const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    gender: [{
        type: String,
        maxLength: 30,
        required: true
    }],
    short_desc: {
        type: String,
        maxLength: 250
    },
    inSale: {
        type: Boolean,
        default: false
    },
    futures: [{
        type: String,
        maxLength: 50,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    specialFor: String,
    size: String,
    category: {
        type: String,
        required: true
    },
    colors: [{
        type: String,
    }],
    brand: [{
        type: String
    }],
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
    },
    inSale_Price: {
        type: Number,
        default: null
    },
}, {
    timestamps: true
})

const product_model = mongoose.model('products', productSchema);

module.exports = product_model;
