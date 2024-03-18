const Cart = require("../models/Cart");
const Product = require("../models/Product");

exports.getCart = async (req, res, next) => {
  try {
    const id = req.user._id;

    const cart = await Cart.aggregate([
      { $match: { userId: id } },
      { $unwind: "$products" },
      {
        $lookup: {
          from: "products",
          let: { productId: "$products.productId" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$_id", "$$productId"],
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
          as: "products.productData",
        },
      },
      {
        $group: {
          _id: "$_id",
          userId: { $first: "$userId" },
          total: { $first: "$total" },
          products: { $push: "$products" },
        },
      },
    ]);

    res.status(200).json({
      status: "success",
      data: {
        cart: cart[0],
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
        err: err,
      },
    });
  }
};

exports.addToCart = async (req, res, next) => {
  try {
    const id = req.user.id;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    const size = req.body.size;

    const product = await Product.findOne({ _id: productId }).select(
      "inventory discountedPrice"
    );
    if (product.inventory[size] < quantity) {
      throw new Error(
        `Not enough Stock. Only ${product.inventory[size]} units available`
      );
    }

    let cart = await Cart.findOne({ userId: id });
    if (!cart) {
      cart = await Cart.create({ userId: id });
    }

    cart.products.push({ productId, quantity, size });
    cart.total += product.discountedPrice * quantity;

    await cart.save();

    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};

exports.removeItem = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const cartItemId = req.params.cartItemId;

    const cart = await Cart.findOne({ userId });

    const cartdelete = cart.products.filter((el) => {
      if (el._id.toString() === cartItemId) {
        return el;
      }
    })[0];

    const product = await Product.findOne({ _id: cartdelete.productId }).select(
      "discountedPrice"
    );
    cart.total -= product.discountedPrice * cartdelete.quantity;

    cart.products = cart.products.filter((el) => {
      if (el._id.toString() !== cartItemId) {
        return el;
      }
    });
    await cart.save();
    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: {
        message: err.message,
      },
    });
  }
};

exports.updateCartItem = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const cartItemId = req.params.cartItemId;
    const update = req.body.update;
    const cart = await Cart.findOne({ userId: userId });

    if (!cart) throw new Error("No cart found for user");

    const cartUpdateProduct = cart.products.filter((el) => {
      if (el._id.toString() === cartItemId) return el;
    })[0];

    const product = await Product.findOne({
      _id: cartUpdateProduct.productId,
    }).select("inventory discountedPrice");

    if (product.inventory[update.size] < cartUpdateProduct.quantity) {
      throw new Error("Not enough Stock");
    }

    if (!update.quantity) {
      cartUpdateProduct.size = update.size;
    }
    if (!update.size) {
      cartUpdateProduct.quantity += update.quantity;
      cart.total += product.discountedPrice * update.quantity;
    }

    cart.products = cart.products.filter((el) => {
      if (el._id.toString() === cartItemId) {
        if (cartUpdateProduct.quantity !== 0) return cartUpdateProduct;
      } else {
        return el;
      }
    });

    await cart.save();
    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
