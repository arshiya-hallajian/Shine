const Product = require('../models/product')



module.exports.search = async (req, res) => {

    const query = req.query;

    const seracharray = Object.keys(req.query);
    const allow = ['brand', 'color', 'size', 'sort'];


    const validation = seracharray.every((update) => allow.includes(update));

    if (!validation) {
        return res.status(400).json({
            status: false,
            data: undefined,
            message: "validation failed",
        });
    }

    let searchObj = {};

    for(value in query){
        searchObj[value] = query[value];
    }





}