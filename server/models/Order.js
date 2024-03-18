const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    required: [true, "User Id is required"],
  },
  orderItems: [
    {
      productId: {
        type: ObjectId,
        required: [true, "Product Id is Required"],
      },
      quantity: {
        type: Number,
        required: [true, "Quantity is required"],
      },
      size: {
        type: String,
        required: [true, "Size is required"],
      },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: () => Date.now(),
  },
});
module.exports = mongoose.model("Order", orderSchema);
