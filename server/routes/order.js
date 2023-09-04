const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
const Order = require("../models/Order")

router.post("/placeOrder",auth,  async (req,res) => {
    const userId = req.user.id;
    const products = req.body.products;
    const total = req.body.total;
    try{
        const order = new Order({userId: userId, orderItems: products, total: total})
        console.log(order);
        await order.save()
        res.status(200).json({msg: "Order Placed"})
    }catch(err){
        console.error(err.message)
        res.status(400).json({msg: "Server Error"});
    }
})

router.get("/getOrders", auth, async(req, res) => {
    const userId = req.user.id;
    try{
        const order = await Order.find({userId});
        console.log(order);
        res.status(200).json({order});
    } catch(err){
        console.error(err.message);
        res.status(400).json({msg: "Server Error"});
    }
})


module.exports = router;