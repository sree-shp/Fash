const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.addProducts);

router.route("/:id").get(productController.getProduct);

router
  .route("/EndOfSeasonSale/:categoryGroup")
  .get(productController.getEndOfSeasonSaleProducts);

router
  .route("/:categoryGroup/:category")
  .get(productController.getProductByCategory);

router
  .route("/:categoryGroup/:category/:subCategory")
  .get(productController.getProductBysubCategory);

module.exports = router;
