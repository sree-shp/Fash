const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const { GetCart, AddToCart, RemoveItem } = require('../controllers/cart');


// Route to get cart items
router.get("/getCart", auth, GetCart);

// Route to add product to cart
router.post("/addToCart", auth, AddToCart)

// Route to remove item from the cart
router.post("/removeItem", auth, RemoveItem)

module.exports = router;