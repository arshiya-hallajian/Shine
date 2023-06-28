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

module.exports.addToCart = async (req, res) => {
  const sellerId = req.userId;
  const productId = req.body.productId;
  const quantity = req.body.quantity;
  try {
    //find product and cart details by id from db
    const product = await Product.findById({ productId });
    const cart = await Cart.findOne({ sellerId: sellerId });

    //check if product is in db
    if (!product) {
      return res.status(400).json({
        status: false,
        data: undefined,
        message: "product not found",
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
        cart.products.push({
          productId,
          name: productName,
          quantity,
          price: productPrice,
        });

        //calc bill price
        cart.checkout = cart.products.reduce((totalPrice, productPrice) => {
          return totalPrice + productPrice.price * productPrice.quantity;
        }, 0);

        await cart.save();

        res.status(200).json({
          status: true,
          data: cart,
          message: "added to cart",
        });
      } else {
        const pd = cart.products[productIndex];
        //add number of quantity to existing product
        pd.quantity = quantity + pd.quantity;
        cart.products[productIndex] = pd;

        //calc bill price
        cart.checkout = cart.products.reduce((totalPrice, productPrice) => {
          return totalPrice + productPrice.price * productPrice.quantity;
        }, 0);

        await cart.save();

        res.status(200).json({
          status: true,
          data: cart,
          message: "added to cart",
        });
      }
    } else {
      //create a new cart
      const newCart = new Cart({
        sellerId,
        products: [
          {
            productId: productId,
            name: productName,
            quantity: quantity,
            price: productPrice,
          },
        ],
        checkout: productPrice * quantity,
      });

      await newCart.save();

      res.status(200).json({
        status: true,
        data: cart,
        message: "new cart added",
      });
    }
  } catch (e) {
    res.status(400).json({
      status: false,
      data: e,
      message: "error from database",
    });
  }
};

//remove to cart function
module.exports.removeFromCart = async (req, res) => {
  const sellerId = req.userId;
  const itemId = req.params.itemId;

  try {
    // find cart in data base

    const cart = await Cart.findOne({ sellerId: sellerId });

    console.log(cart);
    const find_Index = cart.products.findIndex((item) => {
      const check = item.productId.toString();
      return check == itemId;
    });
    //if product doesn't exists
    if (find_Index == -1) {
      res.status(404).json({
        status: false,
        data: null,
        message: "item not found",
      });
    } else {
      const item = cart.products[find_Index];

      // pirce bill minos item multiple quantity
      cart.checkout =
        cart.checkout -
        cart.products[find_Index].price * cart.products[find_Index].quantity;

      // remove products from products array
      cart.products.splice(find_Index, 1);
      await cart.save();

      res.status(200).json({
        status: true,
        data: null,
        message: "item removed",
      });
    }
  } catch (err) {
    res.status(404).json({
      status: false,
      data: err,
      message: "error in db happend",
    });
  }
};
