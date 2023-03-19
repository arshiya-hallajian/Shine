const product_model =require(".././models/product");

module.exports.getAllProducts = () => {};

module.exports.getOneProduct = () => {};
module.exports.createOneProduct = async (req, res) => {
  try {
    let payload = {
      name: req.body.name,
      seller: req.userId,
      description: req.body.description,
      category: req.body.category,
      weight: req.body.weight,
      price: req.body.price,
      picture: req.body.picture,
    };
    //create product in detabase
    let product = await product_model.createOneProduct({
      ...payload,
    });
    res.status(200).json({
      status: true,
      data: product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
      status: false,
    });
  }
};
module.exports.updateOneProduct = () => {};
module.exports.deleteOneProduct = () => {};