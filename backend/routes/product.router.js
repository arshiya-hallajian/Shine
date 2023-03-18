const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const {getAllProducts, getOneProduct, createOneProduct, updateOneProduct, deleteOneProduct} = require('../controller/product.controller')

//get all products
router.get('/', getAllProducts);

//get a product
router.get('/:id', getOneProduct);

// create a product
router.post('/', auth , createOneProduct);

//update a product
router.put('/:id', auth , updateOneProduct);

//delete a product
router.delete('/:id', auth , deleteOneProduct);




module.exports = router
