const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
const { PlaceOrder, GetOrders } = require("../controllers/order");

// Route to Place Order
router.post("/placeOrder",auth,  PlaceOrder)

// Route to Get Orders
router.get("/getOrders", auth, GetOrders)


module.exports = router;