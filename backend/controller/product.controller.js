const product = require(".././models/product");

module.exports.createOneProduct = async (req, res) => {


    //create product in database
    let products = new product({
        name: req.body.name,
        sellerId: req.userId,
        description: req.body.description,
        category: req.body.category,
        gender: req.body.gender,
        short_desc: req.body.short_desc,
        inSale: req.body.inSale,
        futures: req.body.futures,
        specialFor: req.body.specialFor,
        size: req.body.size,
        colors: req.body.colors,
        brand: req.body.brand,
        weight: req.body.weight,
        price: req.body.price,
        inSale_Price: req.body.inSale_Price,
        picture: req.body.picture,
    });
  try {
        await products.save();
        res.status(200).json({
            status: true,
            data: products,
        });
    } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
      status: false,
    });
  }
};

module.exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await product.find({});
    if (!allProducts) {
      res.status(400).json({
        status: false,
        data: undefined,
        message: "Product not found",
      });
    }
    res.status(200).json({
      status: true,
      data: allProducts,
      message: "Product sent successfully",
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      data: e,
      message: "error getting product",
    });
  }
};

module.exports.getOneProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const findProduct = await product.findOne({
      _id: productId,
    });
    console.log(findProduct);
    if (!findProduct) {
      res.status(404).json({
        status: false,
        data: undefined,
        message: "Product not found",
      });
    }
    res.status(200).json({
      status: true,
      data: findProduct,
      message: "Product found",
    });
  } catch (e) {
    res.status(404).json({
      status: false,
      data: e,
      message: "error get a product",
    });
  }
};

module.exports.updateOneProduct = async (req, res) => {

    const productId = req.params.id;
    const json = req.body;
    const updates = Object.keys(json);
    const allowedUpdate = ['name', 'description', 'category', 'weight', 'picture', 'price','inSale_Price', 'brand', 'colors', 'size', 'specialFor','futures', 'inSale', 'short_desc', 'gender']


  const validation = updates.every((update) => allowedUpdate.includes(update));

  if (!validation) {
    return res.status(400).json({
      status: false,
      data: undefined,
      message: "validation failed",
    });
  }

  try {
    const products = await product.findOne({
      _id: productId,
    });
    console.log(products);
    if (!products) {
      return res.status(400).json({
        status: false,
        data: undefined,
        message: "product not found",
      });
    }

    console.log(updates["name"]);
    updates.forEach((key) => {
      products[key] = req.body[key];
      console.log(key);
    });

    await products.save();
    return res.status(200).json({
      status: true,
      data: products,
      message: "product updated successfully",
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      data: e,
      message: "error updating product",
    });
  }
};

module.exports.deleteOneProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deleteProductRequest = await product.findByIdAndDelete(productId);
    if (!deleteProductRequest) {
      res.status(400).json({
        status: false,
        data: undefined,
        message: "could not delete product",
      });
    }
    res.status(200).json({
      status: true,
      data: undefined,
      message: "product deleted successfully",
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      data: e,
      message: "error deleting product",
    });
  }
};
