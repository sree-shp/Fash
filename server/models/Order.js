const { ObjectId } = require("mongodb"); // Import ObjectId from MongoDB
const mongoose = require("mongoose"); // Import Mongoose

// Define the schema for the order
const orderSchema = new mongoose.Schema({
  userId: {
    type: ObjectId, // Type for user ID, referencing ObjectId from MongoDB
    required: [true, "User ID is required"], // User ID is required with a custom error message
  },
  orderItems: [
    {
      productId: {
        type: ObjectId, // Type for product ID, referencing ObjectId from MongoDB
        required: [true, "Product ID is required"], // Product ID is required with a custom error message
      },
      quantity: {
        type: Number, // Type for quantity of the product in the order
        required: [true, "Quantity is required"], // Quantity is required with a custom error message
      },
      size: {
        type: String, // Type for size variant of the product in the order
        required: [true, "Size is required"], // Size is required with a custom error message
      },
    },
  ],
  total: {
    type: Number, // Type for total cost of the order
    required: [true, "Total is required"], // Total is required with a custom error message
  },
  created_at: {
    type: Date, // Type for creation timestamp of the order
    default: () => Date.now(), // Default value is current timestamp when the order is created
  },
});

// Create a Mongoose model named "Order" based on the orderSchema
const Order = mongoose.model("Order", orderSchema);

module.exports = Order; // Export the Order model
