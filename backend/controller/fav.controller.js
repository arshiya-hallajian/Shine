
const Product = require('../models/product');
const Favorite = require('../models/favorite');



module.exports.getFav = async (req,res)=>{
try {
    const favorite  = await Favorite.findOne({sellerId: req.userId});
    if(!favorite){
        res.status(404).json({
            status: false,
            data: undefined,
            message:"user favorite not found"
        })
    }
    // await favorite.populate('favList');
    await favorite.populate(favorite.favList);
    res.status(200).json({
        status: true,
        data: favorite,
        message: "user favorite sended successfully"
    })
}catch (e) {
    res.status(404).json({
        status: false,
        data: e,
        message: "error in database connection"
    })
}


}

module.exports.addFav = async (req,res)=>{

    const productId = req.body.productId;
    try {
        const product = await Product.findById(productId);
        const favorite = await Favorite.findOne({sellerId: req.userId});


        if (!product){
            res.status(404).json({
                status:false,
                data: undefined,
                message: "product not found"
            })
        }


        if (favorite){
            await favorite.favList.push(product);
            favorite.save();
            res.status(200).json({
                status:true,
                data: favorite,
                message: "added successfully"
            })
        }else{

            const fav = await Favorite.create({
                sellerId: req.userId,
                favList: [product]
            })

            res.status(200).json({
                status: true,
                data:fav,
                message: "new fav list created"
            })
            console.log("test")
        }



    }catch (e) {
        res.status(404).json({
            status:false,
            data: e,
            message: "error database connection"
        })
    }

}


// module.exports.removeFav = async (req,res)=>{
//
// }