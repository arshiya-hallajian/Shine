const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const {
    getCart,
    addToCart,
    removeFromCart,
} = require('../controller/cart.controller');

//get all cart by id
router.get('/', auth , getCart);

//add to cart by id
router.post('/', auth , addToCart);

//delete to cart
router.delete('/:itemId', auth, removeFromCart);


module.exports = router
