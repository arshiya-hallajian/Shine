const Cart = require('../models/cart');
const Product = require('../models/product');


module.exports.getCart = (req, res) => {

}


module.exports.addToCart = async (req, res) => {
    const sellerId = req.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    try {
        const product = await Product.findOne({_id: productId});
        const cart = await Cart.findOne({sellerId: sellerId});


        if(!product) {
            return res.status(400).json({
                status: false,
                data: undefined,
                message: "product not found"
            });
        }
            const productName = product.name;
            const productPrice = product.price;

            if(cart) {

            }else{
                const newCart = new Cart({
                    sellerId,
                    products: [{productId: productId, name: productName, quantity: quantity, price: productPrice}],
                    checkout: productPrice * quantity
                });
                await newCart.save();
                res.status(200).json({
                    status: true,
                    data: cart,
                    message: "new cart added"
                })
            }

    }catch (e) {
        res.status(400).json({
            status: false,
            data: e,
            message: "error from database"
        })
    }
}
/*

if cart exist then find index of item
-and get total number
-and save item in cart
*/
module.exports.removeFromCart = (req, res) => {
    
}