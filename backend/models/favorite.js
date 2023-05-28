const mongoose = require("mongoose");

const Fav = new mongoose.Schema({
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    favList: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
    }
    ]
})


const favorite_model = mongoose.model('favorite', Fav);

module.exports = favorite_model;
