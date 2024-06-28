const Products = require("../models/Product"); // Import Product model

// Controller function to search products by search query
exports.searchByProducts = async (req, res) => {
  try {
    const searchQuery = req.query.searchQuery || ""; // Retrieve search query from request parameters or set empty string if not provided

    // Search products using text index on productBrand and productName fields, limit to 5 results
    const searchResults = await Products.find({
      $text: { $search: searchQuery }, // Perform text search using MongoDB $text operator
    })
      .select("productBrand productName images") // Select specific fields to return in results
      .limit(5); // Limit the number of results to 5

    // Send successful response with search results
    res.status(200).json({
      status: "success",
      data: {
        search: searchResults,
      },
    });
  } catch (err) {
    console.error(err.message); // Log error message to console for debugging
    // Send error response with status 400 (Bad Request) and error details
    res.status(400).json({
      status: "fail",
      message: err.message,
      err: err, // Optionally include the error object for detailed debugging
    });
  }
};
