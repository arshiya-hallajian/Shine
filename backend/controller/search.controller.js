const Product = require("../models/product");

module.exports.search = async (req, res) => {
  const query = req.query;

  const seracharray = Object.keys(req.query);
  const allow = ["brand", "color", "size", "sort"];

  const validation = seracharray.every((update) => allow.includes(update));

  if (!validation) {
    return res.status(400).json({
      status: false,
      data: undefined,
      message: "validation failed",
    });
  }

  let searchObj = {};

  for (value in query) {
    searchObj[value] = query[value];
  }
  // search products and return results
  try {
    const searchResult = await Product.find(searchObj);

    if (!searchResult) {
      return res.status(400).json({
        status: false,
        data: undefined,
        message: "product not found",
      });
    }

    return res.status(400).json({
      status: true,
      data: searchResult,
      message: "product finded",
    });
  } catch (e) {
    return res.status(400).json({
      status: false,
      data: e,
      message: "db connection failed",
    });
  }
};
