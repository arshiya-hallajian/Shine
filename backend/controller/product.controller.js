const product =require(".././models/product");


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
    let products = await product.createOneProduct({
      ...payload,
    });
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

module.exports.getAllProducts = (req, res) => {
    try {
        const allProducts = product.findOne({});
        if (!allProducts){
            res.status(400).json({
                status: false,
                data: undefined,
                message : 'Product not found'
            })
        }
        res.status(200).json({
            status: true,
            data: allProducts,
            message: 'Product sent successfully'
        })
    }catch (e) {
        res.status(400).json({
            status: false,
            data: e,
            message: "error getting product"
        })
    }
}

module.exports.getOneProduct = (req, res) => {
    const productId = req.params.id;
    try{
        const findProduct = product.findOne({
            _id: productId
        }).exec();
        if(!findProduct){
            res.status(404).json({
                status: false,
                data: undefined,
                message: "Product not found"
            })
        }
        res.status(200).json({
            status: true,
            data: findProduct,
            message: "Product found"
        })

    }catch (e) {
        res.status(400).json({
            status: false,
            data: e,
            message: "error get a product"
        })
    }
}


module.exports.updateOneProduct = async (req, res) => {
    const productId = req.params.id;
    const updates = Object.key(req.body);
    const allowedUpdate = ['name', 'description', 'category', 'weight', 'picture', 'price']
    const validation = updates.every((query)=>{
        allowedUpdate.includes(query)
    })
    if(!validation){
        res.status(400).json({
            status: false,
            data: undefined,
            message: "validation failed"
        })
    }

    try {
        const products = await product.findOne({
            _id: productId
        });
        if (!products){
            res.status(400).json({
                status:false,
                data: undefined,
                message: "product not found"
            })
        }

        updates.forEach((key)=>{
            products[key] = updates[key];
        })
        await updates.save();
        res.status(400).json({
            status:true,
            data: updates,
            message: "product updated successfully"
        })
    }catch (e) {
        res.status(400).json({
            status: false,
            data : e,
            message: "error updating product"
        })
    }
}

module.exports.deleteOneProduct = async (req, res) => {
    const productId = req.params.id;
    try{
        const deleteProductRequest = await product.findByIdAndDelete(productId);
        if(!deleteProductRequest){
            res.status(400).json({
                status: false,
                data: undefined,
                message: "could not delete product"
            })
        }
        res.status(200).json({
            status: true,
            data: undefined,
            message: "product deleted successfully"
        })
    }catch (e) {
        res.status(400).json({
            status: false,
            data: e,
            message: "error deleting product"
        })
    }
}
