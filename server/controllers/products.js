// The models from the which data has to be fetched has to be imported
const Products = require("../models/Product");
const Category = require("../models/ProductCategory");
const ProductCategory = require("../models/ProductCategory");
const ProductInventory = require("../models/ProductInventory");

async function GetProducts(req, res) {
  // Name is the product Category name for which the products should be fetched
  const name = req.query.name;
  const group = req.query.group
  // filters is an array of objects which contains the various filtering options
  // filters is in the format ==> [{brand: "brand1", "brand2"}, discountedPrice: {"$gt: "100", "$lt": 1000}, discount: {"$lte: "40"}]
  const filters = req.query.filters;
  let queryStr, queryObj;
  const sort = req.query.sort;
  filters && (queryStr = JSON.stringify(filters));
  filters &&
    (queryStr = queryStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    ));
  filters && (queryObj = JSON.parse(queryStr));

  try {
    // Find cateogryIds based on the name of the product category(T-Shirts, Tops etc) or name of subcategory(TopWear, BottomWear)
    // As per Database, name ==> T-Shirts, subCategory ==> TopWear, group ==> men
    // Select only the ids and store it in categoryId
    const categoryId = await ProductCategory.find({
      $or: [{ $and: [{ name: name }, {group: group}] }, { subCategory: name }],
    }).select("_id");

    //Products which match the fetched category Ids are found and stored in products
    let products = await Products.find({
      category_id: { $in: categoryId },
    }).sort({ price: sort });
    // If filters are received from the frontend, find products based on filters
    if (filters) {
      products = await Products.find({
        $and: [
          {
            category_id: { $in: categoryId },
          },
          { $and: queryObj },
        ],
      }).sort({ price: sort });
    }
    // Send response as 200(All Ok) and send the products array as json to the frontend
    res.status(200).json(products);
  } catch (err) {
    // Print error message to the console
    console.error(err.message);
    // Send response as 400 and send json as msg and error
    return res.status(400).json({ msg: "Server Error", error: err.message });
  }
}

async function GetEndOfSeasonSaleProducts(req, res) {
  const group = req.query.group || "";
  const filters = req.query.filters;
  const sort = req.query.sort;

  let queryStr, queryObj;
  filters && (queryStr = JSON.stringify(filters));
  filters &&
    (queryStr = queryStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    ));
  filters && (queryObj = JSON.parse(queryStr));

  try {
    const categoryId = await ProductCategory.find({ group: title }).select(
      "_id"
    );
    let products;
    if (title) {
      //Products which match the fetched category Ids are found and stored in products

      // If filters are received from the frontend, find products based on filters
      if (filters) {
        products = await Products.find({
          $and: [
            {
              category_id: { $in: categoryId },
            },
            { $and: queryObj },
          ],
        }).sort({ price: sort });
      } else {
        products = await Products.find({
          category_id: { $in: categoryId },
        }).sort({ price: sort });
      }
    } else {
      if (filters) {
        products = await Products.find({
          $and: [{}, { $and: queryObj }],
        }).sort({ price: sort });
      } else {
        products = await Products.find({}).sort({ price: sort });
      }
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ msg: "Server Error", error: err.message });
  }
}

async function GetProductDetails(req, res) {
  const query = req.query;
  try {
    const products = await Products.find(query);
    res.status(200).json(products);
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({ msg: "Server Error", error: err.message });
  }
}

module.exports = { GetProducts, GetEndOfSeasonSaleProducts, GetProductDetails };
