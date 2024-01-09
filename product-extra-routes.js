router.post("/createProductInventory", async (req, res) => {
  try {
    let productId = [];
    productId = await Products.find({}).select("_id");
    productId.forEach(async (Id) => {
      const inventory = new ProductInventory({
        product_id: Id,
        quantity: [
          {
            XS: 50,
          },
          {
            S: 50,
          },
          {
            M: 50,
          },
          {
            L: 50,
          },
          {
            XL: 50,
          },
        ],
      });

      await inventory.save();
    });
    res.status(200).json({ msg: "Inventory added" });
  } catch (err) {
    res.status(400).json({ msg: "Server Error", error: err.message });
  }
});

router.post("/addInventoryId", async (req, res) => {
  try {
    let productId = [];
    productId = await ProductInventory.find({}).select("product_id");

    productId.forEach(async (Id) => {
      let inventoryId = await ProductInventory.findOne({
        product_id: Id.product_id,
      }).select("_id");

      await Products.updateOne(
        { _id: Id.product_id },
        { $set: { inventory_id: inventoryId._id } }
      );
    });
    res.status(200).json({ msg: "Inventory Id added" });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: "Server Error", error: err.message });
  }
});

router.post("/addProducts", async (req, res) => {
  try {
    const products = await Products.insertMany(req.body, { ordered: true });

    res.status(200).json({ msg: "Product added" });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: "Server error", error: err.message });
  }
});

router.post("/addDiscount", async (req, res) => {
  const query = req.body.brand;
  const discount = req.body.discount;
  try {
    await Products.updateMany(
      { discount: { $exists: false } },
      { $set: { discount: 25 } }
    );
    res.status(200).json({ msg: "discount added" });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: "Server Error", error: err.message });
  }
});

router.post("/addDiscountedPrice", async (req, res) => {
  try {
    let products = await Products.find({ discount: { $exists: true } });
    products.forEach(async (item) => {
      let disPrice = Math.round(
        item.price - item.price * (item.discount / 100)
      );

      await Products.updateOne(
        { _id: item.id },
        { $set: { discountedPrice: disPrice } }
      );
    });

    res.status(200).json({ msg: "discount added" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ msg: "Server Error", error: err.message });
  }
});

router.get("/test", (req, res) => {});
