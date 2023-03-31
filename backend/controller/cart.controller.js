const Cart = require("../models/cart");
const Product = require("../models/product");

// Select a product from the shopping cart
module.exports.getCart = async (req, res) => {
  const sellerId = req.userId;

  try {
    const cart = await Cart.findOne({ sellerId });

    if (cart && cart.items.length > 0) {
      res.status(200).json({
        status: true,
        data: cart,
      });
    } else {
      res.status(400).json({
        status: false,
        data: null,
      });
    }
  } catch (e) {
    res.status(400).json({
      status: false,
      data: e,
    });
  }
};

module.exports.addToCart = (req, res) => {};

//remove to cart function
module.exports.removeFromCart = async (req, res) => {
  const sellerId = req.userId;
  const itemId = req.params.itemsId;

  try {
    // find cart in data base
    const cart = await Cart.findOne({ sellerId: sellerId });

    const findIndex = cart.items.findIndex((item) => item.itemId === itemId);

    //if product doesn't exists
    if (findIndex == -1) {
      res.status(404).json({
        status: false,
        data: null,
        message: "item not found",
      });
    } else {
      const item = cart.items[findIndex]; 

      // pirce bill minos item multiple quantity      
      cart.checkout =
        cart.checkout -
        cart.items[findIndex].price * cart.items[findIndex].quantity;

        // remove products from products array
      cart.items.splice(findIndex, 1);
      await cart.save();

      res.status(200).json({
        status: true,
        data: null,
      message: "item removed"
      });
    }
  } catch (err) {
    res.status(404).json({
      status: false,
      data: err,
      message: "error in db happend"
    });
  }
};
