const express = require("express");
const router = express.Router(); // Create a new Router instance
const productController = require("../controllers/productController"); // Import the product controller

// Route to handle all products
router
  .route("/")
  .get(productController.getAllProducts) // GET request to get all products
  .post(productController.addProducts); // POST request to add new products

// Route to get a specific product by ID
router.route("/:id").get(productController.getProduct); // GET request to get a product by ID

// Route to get products by end of season sale category group
router
  .route("/EndOfSeasonSale/:categoryGroup")
  .get(productController.getEndOfSeasonSaleProducts); // GET request to get products by end of season sale category group

// Route to get products by category group and category
router
  .route("/:categoryGroup/:category")
  .get(productController.getProductByCategory); // GET request to get products by category group and category

// Route to get products by category group, category, and sub-category
router
  .route("/:categoryGroup/:category/:subCategory")
  .get(productController.getProductBysubCategory); // GET request to get products by category group, category, and sub-category

module.exports = router; // Export the router instance with defined routes
