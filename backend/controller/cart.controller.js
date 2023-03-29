const Cart = require('../models/cart');
const Product = require('../models/product');

// Select a product from the shopping cart
module.exports.getCart = async (req, res) => {
    
    const sellerId = req.userId
    
    try{    
        const cart = await Cart.findOne({sellerId});

         if(cart && cart.items.length > 0){
            res.status(200).json({
                status: true, 
                data: cart
            });
         }else{
            res.status(400).json({
                status : false,
                data : null
            });
         }
        
    }catch(e){
        res.status(400).json({
            status:false,
            data: e
        })
    }
}


module.exports.addToCart = (req, res) => {
    
}


module.exports.removeFromCart = (req, res) => {
     
}