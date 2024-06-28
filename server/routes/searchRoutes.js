const express = require("express");
const router = express.Router(); // Create a new Router instance
const searchController = require("../controllers/searchController"); // Import the search controller

// Define a route to handle product search
router.get("/", searchController.searchByProducts); // GET Request to get an array of products based on search query

module.exports = router; // Export the router instance with defined route
