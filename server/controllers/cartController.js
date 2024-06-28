const Cart = require("../models/Cart"); // Import Cart model
const Product = require("../models/Product"); // Import Product model

// Controller function to get user's cart
exports.getCart = async (req, res, next) => {
  try {
    const id = req.user._id; // Get user ID from request

    // Aggregate query to fetch user's cart with product details
    const cart = await Cart.aggregate([
      { $match: { userId: id } }, // Match cart by user ID
      { $unwind: "$products" }, // Unwind products array
      {
        $lookup: {
          // Perform a lookup to fetch product details
          from: "products",
          let: { productId: "$products.productId" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$productId"], // Match product ID
                },
              },
            },
            {
              $project: {
                _id: 0,
                productBrand: 1,
                productName: 1,
                images: 1,
                rating: 1,
                mrp: 1,
                discountedPrice: 1,
                discount: 1,
              },
            },
          ],
          as: "products.productData", // Store product data in products array
        },
      },
      {
        $group: {
          _id: "$_id",
          userId: { $first: "$userId" },
          total: { $first: "$total" },
          products: { $push: "$products" }, // Push products array
        },
      },
    ]);

    // Send success response with user's cart data
    res.status(200).json({
      status: "success",
      data: {
        cart: cart[0], // Return first cart object
      },
    });
  } catch (err) {
    // Send failure response if an error occurs
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
        err: err, // Include error details
      },
    });
  }
};

// Controller function to add a product to user's cart
exports.addToCart = async (req, res, next) => {
  try {
    const id = req.user.id; // Get user ID from request
    const productId = req.body.productId; // Get product ID from request body
    const quantity = req.body.quantity; // Get product quantity from request body
    const size = req.body.size; // Get product size from request body

    // Find product by ID and select inventory and discounted price fields
    const product = await Product.findOne({ _id: productId }).select(
      "inventory discountedPrice"
    );

    // Check if sufficient stock is available for the requested size
    if (product.inventory[size] < quantity) {
      throw new Error(
        `Not enough stock. Only ${product.inventory[size]} units available`
      );
    }

    // Find user's cart or create a new one if it doesn't exist
    let cart = await Cart.findOne({ userId: id });
    if (!cart) {
      cart = await Cart.create({ userId: id });
    }

    // Add product to cart with quantity and size
    cart.products.push({ productId, quantity, size });
    // Update total cart value based on product's discounted price and quantity
    cart.total += product.discountedPrice * quantity;

    // Save updated cart
    await cart.save();

    // Send success response with updated cart data
    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (err) {
    // Send failure response if an error occurs
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};

// Controller function to remove an item from user's cart
exports.removeItem = async (req, res, next) => {
  try {
    const userId = req.user._id; // Get user ID from request
    const cartItemId = req.params.cartItemId; // Get cart item ID from request params

    // Find user's cart by user ID
    const cart = await Cart.findOne({ userId });

    // Filter out the cart item to be removed
    const cartdelete = cart.products.filter((el) => {
      if (el._id.toString() === cartItemId) {
        return el;
      }
    })[0];

    // Find product by cart item's product ID and select discounted price
    const product = await Product.findOne({ _id: cartdelete.productId }).select(
      "discountedPrice"
    );

    // Subtract product's price from total cart value
    cart.total -= product.discountedPrice * cartdelete.quantity;

    // Filter out the cart item from products array
    cart.products = cart.products.filter((el) => {
      if (el._id.toString() !== cartItemId) {
        return el;
      }
    });

    // Save updated cart
    await cart.save();

    // Send success response with updated cart data
    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (err) {
    // Send failure response if an error occurs
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};

// Controller function to update quantity or size of an item in user's cart
exports.updateCartItem = async (req, res, next) => {
  try {
    const userId = req.user.id; // Get user ID from request
    const cartItemId = req.params.cartItemId; // Get cart item ID from request params
    const update = req.body.update; // Get update object from request body

    // Find user's cart by user ID
    const cart = await Cart.findOne({ userId: userId });

    // Throw error if no cart found for user
    if (!cart) throw new Error("No cart found for user");

    // Filter out cart item to be updated
    const cartUpdateProduct = cart.products.filter((el) => {
      if (el._id.toString() === cartItemId) return el;
    })[0];

    // Find product by cart item's product ID and select inventory and discounted price
    const product = await Product.findOne({
      _id: cartUpdateProduct.productId,
    }).select("inventory discountedPrice");

    // Throw error if insufficient stock for updated quantity and size
    if (product.inventory[update.size] < cartUpdateProduct.quantity) {
      throw new Error("Not enough stock");
    }

    // Update cart item's size or quantity based on update object
    if (!update.quantity) {
      cartUpdateProduct.size = update.size; // Update size if no quantity change
    }
    if (!update.size) {
      // Update quantity and total cart value based on updated quantity
      cartUpdateProduct.quantity += update.quantity;
      cart.total += product.discountedPrice * update.quantity;
    }

    // Filter out cart item from products array if quantity is zero
    cart.products = cart.products.filter((el) => {
      if (el._id.toString() === cartItemId) {
        if (cartUpdateProduct.quantity !== 0) return cartUpdateProduct;
      } else {
        return el;
      }
    });

    // Save updated cart
    await cart.save();

    // Send success response with updated cart data
    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (err) {
    // Send failure response if an error occurs
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
