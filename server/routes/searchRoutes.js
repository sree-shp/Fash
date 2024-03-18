const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

//route to get an array of products from the database for the given search Query
router.get("/", searchController.searchByProducts);

module.exports = router;
