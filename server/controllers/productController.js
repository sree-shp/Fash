const Category = require("../models/Category"); // Import Category model
const Product = require("../models/Product"); // Import Product model

// Controller function to get all products
exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({}); // Find all products
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

// Controller function to add products
exports.addProducts = async (req, res, next) => {
  try {
    const products = req.body.products; // Extract products from request body
    const addedProducts = await Product.insertMany(products); // Insert multiple products

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

// Controller function to get a product by ID
exports.getProduct = async (req, res, next) => {
  try {
    const id = req.params.id; // Get product ID from request parameters

    const product = await Product.findById(id); // Find product by ID
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

// Controller function to get products by category group for end of season sale
exports.getEndOfSeasonSaleProducts = async (req, res, next) => {
  try {
    const categoryGroup = req.params.categoryGroup; // Get category group from request parameters

    const categoryId = await Category.find({
      categoryGroup: categoryGroup,
    }).select("_id"); // Find category ID by category group
    const products = await Product.find({ category_id: { $in: categoryId } }); // Find products by category ID
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

// Controller function to get products by category and category group
exports.getProductByCategory = async (req, res, next) => {
  try {
    const categoryGroup = req.params.categoryGroup; // Get category group from request parameters
    const category = req.params.category; // Get category from request parameters

    const categoryId = await Category.find({ categoryGroup, category }).select(
      "_id"
    ); // Find category ID by category and category group
    const products = await Product.find({ category_id: { $in: categoryId } }); // Find products by category ID
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

// Controller function to get products by subcategory, category, and category group
exports.getProductBysubCategory = async (req, res, next) => {
  try {
    const categoryGroup = req.params.categoryGroup; // Get category group from request parameters
    const category = req.params.category; // Get category from request parameters
    const subCategory = req.params.subCategory; // Get subcategory from request parameters

    const categoryId = await Category.findOne({
      categoryGroup,
      category,
      subCategory,
    }).select("_id"); // Find category ID by subcategory, category, and category group
    const products = await Product.find({ category_id: categoryId }); // Find products by category ID
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
