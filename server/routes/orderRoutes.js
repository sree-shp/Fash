const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const orderController = require("../controllers/orderController");

router
  .route("/")
  .get(authController.protect, orderController.getOrders)
  .post(authController.protect, orderController.placeOrder);

module.exports = router;
