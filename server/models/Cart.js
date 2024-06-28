const { ObjectId } = require("mongodb"); // Import ObjectId from MongoDB
const mongoose = require("mongoose"); // Import Mongoose

// Define the schema for the cart
const cartSchema = new mongoose.Schema({
  userId: {
    type: ObjectId, // Type for user ID, referencing ObjectId from MongoDB
    required: true, // User ID is required
  },
  products: [
    {
      productId: {
        type: ObjectId, // Type for product ID, referencing ObjectId from MongoDB
        ref: "Product", // Reference to the Product model (assuming you have a Product model)
        required: true, // Product ID is required
      },
      quantity: {
        type: Number, // Type for quantity of the product in the cart
        default: 1, // Default quantity is 1 if not specified
      },
      size: {
        type: String, // Type for size variant of the product (optional)
      },
    },
  ],
  total: {
    type: Number, // Type for total cost of all products in the cart
    default: 0, // Default total is 0 if cart is empty
  },
});

module.exports = mongoose.model("Cart", cartSchema); // Export the schema as a Mongoose model named "Cart"
