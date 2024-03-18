const Order = require("../models/Order");
const Product = require("../models/Product");

exports.getOrders = async (req, res, next) => {
  try {
    const id = req.user._id;

    const orders = await Order.aggregate([
      { $match: { userId: id } },
      { $unwind: "$orderItems" },
      {
        $lookup: {
          from: "products",
          let: { productId: "$orderItems.productId" },
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
          as: "orderItems.productData",
        },
      },
      {
        $group: {
          _id: "$_id",
          userId: { $first: "$userId" },
          total: { $first: "$total" },
          orderItems: { $push: "$orderItems" },
        },
      },
    ]);

    res.status(200).json({
      status: "success",
      data: {
        orders,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.placeOrder = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const orderItems = req.body.orderItems;
    const total = req.body.total;

    orderItems.forEach(async (el) => {
      const product = await Product.findOne({ _id: el.productId });

      if (product.inventory[el.size] < el.quantity) {
        throw new Error("Out of Stock ");
      } else {
        product.inventory[el.size] -= el.quantity;
        await product.save();
      }
    });

    const order = await Order.create({
      userId,
      orderItems,
      total,
    });

    res.status(200).json({
      status: "success",
      data: {
        order,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
