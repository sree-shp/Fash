const { text } = require("express");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    required: true,
  },
  products: [
    {
      productId: {
        type: ObjectId,
      },
      quantity: {
        type: Number,
      },
      size: {
        type: String,
      },
    },
  ],
  total: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
