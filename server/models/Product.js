const { ObjectId } = require("mongodb"); // Import ObjectId from MongoDB
const mongoose = require("mongoose"); // Import Mongoose

// Define the schema for the products
const productsSchema = new mongoose.Schema({
  productBrand: {
    type: String, // Type for product brand
    required: true, // Product brand is required
  },
  productName: {
    type: String, // Type for product name
    required: true, // Product name is required
  },
  category_id: {
    type: ObjectId, // Type for category ID, referencing ObjectId from MongoDB
    required: true, // Category ID is required
  },
  images: [
    {
      type: String, // Type for image URLs of the product
    },
  ],
  inventory: {
    XS: {
      type: Number, // Type for inventory count of size XS
      default: 100, // Default inventory count is 100 if not specified
    },
    S: {
      type: Number, // Type for inventory count of size S
      default: 100, // Default inventory count is 100 if not specified
    },
    M: {
      type: Number, // Type for inventory count of size M
      default: 100, // Default inventory count is 100 if not specified
    },
    L: {
      type: Number, // Type for inventory count of size L
      default: 100, // Default inventory count is 100 if not specified
    },
    XL: {
      type: Number, // Type for inventory count of size XL
      default: 100, // Default inventory count is 100 if not specified
    },
  },
  mrp: {
    type: Number, // Type for Maximum Retail Price (MRP) of the product
    required: true, // MRP is required
  },
  discountedPrice: {
    type: Number, // Type for discounted price of the product (if applicable)
  },
  discount: {
    type: Number, // Type for discount percentage of the product (if applicable)
  },
  rating: {
    type: Number, // Type for rating of the product (default is 4)
    default: 4,
  },
  created_at: {
    type: Date, // Type for creation timestamp of the product
    default: () => Date.now(), // Default value is current timestamp when the product is created
  },
  modified_at: {
    type: Date, // Type for modification timestamp of the product
  },
  deleted_at: {
    type: Date, // Type for deletion timestamp of the product (soft delete)
  },
});

// Create a Mongoose model named "Products" based on the productsSchema
const Products = mongoose.model("Products", productsSchema);

module.exports = Products; // Export the Products model
