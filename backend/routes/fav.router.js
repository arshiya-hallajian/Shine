const express = require('express');
const router = express.Router();
const {getFav,addFav, removeFav} = require('../controller/fav.controller');
const auth = require('../middleware/auth.middleware');


//get user favorites
router.get('/',auth ,getFav);

//add to favorite list
router.post('/',auth ,addFav);

//remove from favorite list
router.delete('/',auth ,removeFav);

module.exports = router