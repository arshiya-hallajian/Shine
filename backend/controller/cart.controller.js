const Cart = require('../models/cart');
const Product = require('../models/product');


module.exports.getCart = (req, res) => {

}


module.exports.addToCart = async (req, res) => {
    const sellerId = req.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    try {
        //find product and cart details by id from db
        const product = await Product.findById({productId});
        const cart = await Cart.findOne({sellerId: sellerId});


        //check if product is in db
        if (!product) {
            return res.status(400).json({
                status: false,
                data: undefined,
                message: "product not found"
            });
        }
        const productName = product.name;
        const productPrice = product.price;

        //check if cart is in db
        if (cart) {

            //check if product exists in cart or not
            const productIndex = cart.products.findIndex((item) => {
                const itemId = item.productId.toString();
                return itemId === productId;
            });

            //if product not exists in cart
            if (productIndex === -1) {
                //add product to cart
                cart.products.push({productId, name: productName, quantity, price: productPrice});

                //calc bill price
                cart.checkout = cart.products.reduce((totalPrice, productPrice) => {
                    return totalPrice + productPrice.price * productPrice.quantity
                }, 0)

                await cart.save();

                res.status(200).json({
                    status: true,
                    data: cart,
                    message: "added to cart"
                });

            } else {

                const pd = cart.products[productIndex];
                //add number of quantity to existing product
                pd.quantity = quantity + pd.quantity;
                cart.products[productIndex] = pd;

                //calc bill price
                cart.checkout = cart.products.reduce((totalPrice, productPrice) => {
                    return totalPrice + productPrice.price * productPrice.quantity;
                }, 0)

                await cart.save();

                res.status(200).json({
                    status: true,
                    data: cart,
                    message: "added to cart"
                });
            }

        } else {
            //create a new cart
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

    } catch (e) {
        res.status(400).json({
            status: false,
            data: e,
            message: "error from database"
        })
    }
}


module.exports.removeFromCart = (req, res) => {

}