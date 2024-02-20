const Order = require("../models/Order");
const Cart = require("../models/Cart");


// Controller function to place order from the cart
async function PlaceOrder(req, res)  {
    // Store the user Id from the request 
    const userId = req.user.id;
    // Store the products from the request body
    const products = req.body.products;
    //  Store the Total from therequest body
    const total = req.body.total;

    try {
        // Create a new order with userId, orderItems array and its total and save it
        const order = new Order({
        userId: userId,
        orderItems: products,
        total: total,
        });
        await order.save();
        // Once order is placed the cart has to be updated
        // Cart for the given user Id is found 
        //  products array is set to an empty array and total as 0
        await Cart.updateOne(
        { userId: userId },
        { $set: { product: [], total: 0 } }
        );
        // / Send status as 200(All Ok) along with the message 
        res.status(200).json({ msg: "Order Placed" });
    } catch (err) {
      // Log the error message to the console
      console.error(err.message);
      // Send the status as 400(Bad Request) along with the error message
      res.status(400).json({ msg: "Server Error", error: err.message });
    }
};

async function GetOrders (req, res)  {
    // Store the user id from the request
    const userId = req.user.id;
    try {
        // Find the Orders for the given user Id
        const order = await Order.find({ userId });
        // Send status as 200(All Ok) along with the message 
        res.status(200).json({ order });
    } catch (err) {
      // Log the error message to the console
      console.error(err.message);
      // Send the status as 400(Bad Request) along with the error message
      res.status(400).json({ msg: "Server Error", error: err.message });
    }
};

module.exports = {PlaceOrder, GetOrders}