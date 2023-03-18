const product = require('../models/product');

module.exports.getAllProducts = (req, res) => {

}

module.exports.getOneProduct = (req, res) => {

}

module.exports.createOneProduct = (req, res) => {

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

}