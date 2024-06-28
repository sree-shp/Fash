const express = require("express");
const router = express.Router(); // Create a new Router instance
const cartController = require("../controllers/cartController"); // Import the cart controller
const authController = require("../controllers/authController"); // Import the authentication controller

// Route to handle operations on the entire cart
router
  .route("/")
  .get(authController.protect, cartController.getCart) // GET request to retrieve the user's cart, protected route
  .post(authController.protect, cartController.addToCart); // POST request to add an item to the cart, protected route

// Route to handle operations on a specific item in the cart
router
  .route("/:cartItemId")
  .patch(authController.protect, cartController.updateCartItem) // PATCH request to update a specific item in the cart, protected route
  .delete(authController.protect, cartController.removeItem); // DELETE request to remove a specific item from the cart, protected route

module.exports = router; // Export the router instance with defined routes
