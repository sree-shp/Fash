const Order = require("../models/Order"); // Import Order model
const Product = require("../models/Product"); // Import Product model

// Controller function to get orders for a user
exports.getOrders = async (req, res, next) => {
  try {
    const id = req.user._id; // Get user ID from request

    // Aggregate query to fetch user's orders with product details
    const orders = await Order.aggregate([
      { $match: { userId: id } }, // Match orders by user ID
      { $unwind: "$orderItems" }, // Unwind orderItems array
      {
        $lookup: {
          // Perform a lookup to fetch product details
          from: "products",
          let: { productId: "$orderItems.productId" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$productId"], // Match product ID
                },
              },
            },
            {
              $project: {
                _id: 0,
                productBrand: 1,
                productName: 1,
                images: 1,
                rating: 1,
                mrp: 1,
                discountedPrice: 1,
                discount: 1,
              },
            },
          ],
          as: "orderItems.productData", // Store product data in orderItems array
        },
      },
      {
        $group: {
          _id: "$_id",
          userId: { $first: "$userId" },
          total: { $first: "$total" },
          orderItems: { $push: "$orderItems" }, // Push orderItems array
        },
      },
    ]);

    // Send success response with user's orders data
    res.status(200).json({
      status: "success",
      data: {
        orders,
      },
    });
  } catch (err) {
    // Send failure response if an error occurs
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Controller function to place a new order
exports.placeOrder = async (req, res, next) => {
  try {
    const userId = req.user._id; // Get user ID from request
    const orderItems = req.body.orderItems; // Get order items from request body
    const total = req.body.total; // Get total order value from request body

    // Loop through each order item to check and update product inventory
    orderItems.forEach(async (el) => {
      const product = await Product.findOne({ _id: el.productId }); // Find product by ID

      // Check if sufficient stock is available for the order item
      if (product.inventory[el.size] < el.quantity) {
        throw new Error("Out of Stock ");
      } else {
        // Deduct ordered quantity from product inventory
        product.inventory[el.size] -= el.quantity;
        await product.save(); // Save updated product inventory
      }
    });

    // Create new order with user ID, order items, and total value
    const order = await Order.create({
      userId,
      orderItems,
      total,
    });

    // Send success response with newly created order data
    res.status(200).json({
      status: "success",
      data: {
        order,
      },
    });
  } catch (err) {
    // Send failure response if an error occurs
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
