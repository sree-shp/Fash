const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryGroup: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
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

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
