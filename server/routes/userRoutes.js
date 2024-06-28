const express = require("express");
const router = express.Router(); // Create a new Router instance
const authController = require("../controllers/authController"); // Import the authentication controller

// Define routes and their corresponding controller methods
router.post("/signup", authController.signup); // POST Request to handle user signup
router.post("/login", authController.login); // POST Request to handle user login
router.post("/logout", authController.logout); // POST Request to handle user logout

module.exports = router; // Export the router instance with defined routes
