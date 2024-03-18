const Category = require("../models/Category");
const Product = require("../models/Product");

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err: err,
      message: err.message,
    });
  }
};

exports.addProducts = async (req, res, next) => {
  try {
    const products = req.body.products;
    const addedProducts = await Product.insertMany(products);

    res.status(200).json({
      status: "success",
      data: {
        addedProducts,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err: err,

      message: err.message,
    });
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    const product = await Product.find({ _id: id });
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};

exports.getEndOfSeasonSaleProducts = async (req, res, next) => {
  try {
    const categoryGroup = req.params.categoryGroup;

    const categoryId = await Category.find({
      categoryGroup: categoryGroup,
    }).select("_id");
    const products = await Product.find({ category_id: { $in: categoryId } });
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};

exports.getProductByCategory = async (req, res, next) => {
  try {
    const categoryGroup = req.params.categoryGroup;
    const category = req.params.category;

    const categoryId = await Category.find({
      categoryGroup,
      category,
    }).select("_id");

    const products = await Product.find({ category_id: { $in: categoryId } });
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};

exports.getProductBysubCategory = async (req, res, next) => {
  try {
    const categoryGroup = req.params.categoryGroup;
    const category = req.params.category;
    const subCategory = req.params.subCategory;

    const categoryId = await Category.findOne({
      categoryGroup,
      category,
      subCategory,
    }).select("_id");

    const products = await Product.find({ category_id: categoryId });
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};
