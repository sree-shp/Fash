const express = require("express");
const router = express.Router();
const { SearchByProducts } = require("../controllers/search");

//route to get an array of products from the database for the given search Query
router.get("/searchByProducts", SearchByProducts)

module.exports = router;