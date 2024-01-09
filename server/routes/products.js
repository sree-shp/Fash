const express = require('express');
const router = express.Router();


const { GetProducts, GetEndOfSeasonSaleProducts, GetProductDetails } = require('../controllers/products');

// Route to get products either with Productcategory name or subCategory name with filters
router.get("/getProducts", GetProducts);

// Route to get End of Season Sale 
router.get("/getEndOfSeasonSaleProducts", GetEndOfSeasonSaleProducts)

// Route to get Product Details
router.get("/getProductDetails", GetProductDetails);




module.exports = router;

