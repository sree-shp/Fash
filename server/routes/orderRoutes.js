const express = require("express");
const router = express.Router(); // Create a new Router instance
const authController = require("../controllers/authController"); // Import the authentication controller
const orderController = require("../controllers/orderController"); // Import the order controller

// Route to handle all orders
router
  .route("/")
  .get(authController.protect, orderController.getOrders) // GET request to retrieve orders, protected route
  .post(authController.protect, orderController.placeOrder); // POST request to place a new order, protected route

module.exports = router; // Export the router instance with defined routes
