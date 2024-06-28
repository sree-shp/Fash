const mongoose = require("mongoose"); // Import Mongoose

// Define the schema for the category
const categorySchema = new mongoose.Schema({
  categoryGroup: {
    type: String, // Type for category group (e.g., men, women, kids)
    required: true, // Category group is required
  },
  category: {
    type: String, // Type for category (e.g., clothing, accessories)
    required: true, // Category is required
  },
  subCategory: {
    type: String, // Type for sub-category (e.g., shirts, pants, shoes)
    required: true, // Sub-category is required
  },
  created_at: {
    type: Date, // Type for creation timestamp of the category
    default: () => Date.now(), // Default value is current timestamp when the category is created
  },
  modified_at: {
    type: Date, // Type for modification timestamp of the category
  },
  deleted_at: {
    type: Date, // Type for deletion timestamp of the category (soft delete)
  },
});

// Create a Mongoose model named "Category" based on the categorySchema
const Category = mongoose.model("Category", categorySchema);

module.exports = Category; // Export the Category model
