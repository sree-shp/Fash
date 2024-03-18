const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  productBrand: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  category_id: {
    type: ObjectId,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  inventory: {
    XS: {
      type: Number,
      default: 100,
    },
    S: {
      type: Number,
      default: 100,
    },
    M: {
      type: Number,
      default: 100,
    },
    L: {
      type: Number,
      default: 100,
    },
    XL: {
      type: Number,
      default: 100,
    },
  },
  mrp: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  rating: {
    type: Number,
    default: 4,
  },
  created_at: {
    type: Date,
    default: () => Date.now(),
  },
  modified_at: {
    type: Date,
  },
  deleted_at: {
    type: Date,
  },
});

module.exports = mongoose.model("Products", productsSchema);
