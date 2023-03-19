const product = require('../models/product');

module.exports.getAllProducts = (req, res) => {
    try {
        //get all product data
        const allProducts = product.findOne({});
        if (!allProducts){
            res.status(400).json({
                status: false,
                data: undefined,
                message : 'Product not found'
            })
        }
        //ok response
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
        // find product with id
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
        //ok response
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

module.exports.createOneProduct = (req, res) => {

}
module.exports.updateOneProduct = async (req, res) => {
    const productId = req.params.id;
    //separate keys
    const updates = Object.key(req.body);
    const allowedUpdate = ['name', 'description', 'category', 'weight', 'picture', 'price']
    //check if keys exists in allowed update
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

        const products = await product.findOne({      //find product by id
            _id: productId
        });
        if (!products){
            res.status(400).json({
                status:false,
                data: undefined,
                message: "product not found"
            })
        }

        updates.forEach((key)=>{             //update every key in mongoose
            products[key] = updates[key];
        })
        await updates.save();           // save in mongoose
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
        const deleteProductRequest = await product.findByIdAndDelete(productId); // find and delete product by id
        if(!deleteProductRequest){
            res.status(400).json({
                status: false,
                data: undefined,
                message: "could not delete product"
            })
        }
        res.status(200).json({   //ok status
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