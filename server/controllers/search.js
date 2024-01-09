const Products = require("../models/Product");

async function SearchByProducts(req, res) {
  try {
    //store the searchQuery sent from react through params if present, or else store a empty string
    const searchQuery = req.query.searchQuery || "";

    //store the results of the query. Selects the name brand and images fields.
    const searchResults = await Products.find({
      $text: { $search: searchQuery },
    })
      .select("brand name images")
      .limit(5);
    //  Send status as 200(All Ok) along with the message
    res.status(200).json({ msg: "Search successfull", results: searchResults });
  } catch (err) {
    console.error(err.message);
    // Send the status as 400(Bad Request) along with the error message
    res.status(400).json({ msg: "Server Error", error: err.message });
  }
}

module.exports = { SearchByProducts };
