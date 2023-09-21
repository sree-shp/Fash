const express = require('express');
const router = express.Router();
const Products = require('../models/Product');
const Category = require("../models/ProductCategory");
const ProductCategory = require('../models/ProductCategory');
const ProductInventory = require('../models/ProductInventory');


router.get("/getProducts", async (req, res) => {
    const query = req.query.name;
    const filters = req.query.filters;
    console.log(filters);
    
    try{
        const categoryId = await ProductCategory.find({$or: [{name: query}, {subCategory: query}]}).select("_id");
        
        let products = await Products.find({category_id : {$in: categoryId}});
        if(filters){
            products = await Products.find({
              $and: [
                {
                  category_id: { $in: categoryId }
                },
                { $and: filters }
              ],
            });

        }

        res.status(200).json(products)
    }
    catch(err){
        console.error(err.message);
        return res.status(400).json({msg: "Server Error", error: err.message})
    }
});

router.get("/getProductDetails", async (req, res) => {
    const query = req.query;
    try{
        const products = await Products.find(query);
        res.status(200).json(products)
    }
    catch(err){
        console.error(err.message);
        return res.status(400).json({msg: "Server Error", error: err.message})
    }
});

router.post("/createProductInventory", async (req, res) => {
    try{
    let productId = [];
    productId = await Products.find({}).select("_id");
    productId.forEach(async (Id) => {
        const inventory = new ProductInventory({
            product_id: Id,
            quantity: [
                {
                    XS: 50
                },
                {
                    S: 50
                },
                {
                    M: 50
                },
                {
                    L: 50
                },
                {
                    XL: 50
                }
        ]
        })
        console.log(inventory);
        await inventory.save();
    })
    res.status(200).json({ msg : "Inventory added"});
} catch(err){
    res.status(400).json({ msg: "Server Error", error: err.message});
}
})

router.post("/addInventoryId", async (req, res) => {
    try{
    let productId = [];
    productId = await ProductInventory.find({}).select("product_id");
    console.log(productId)
    productId.forEach(async (Id) => {
        let inventoryId = await ProductInventory.findOne({product_id: Id.product_id}).select("_id");
        console.log(inventoryId._id);
        await Products.updateOne({_id: Id.product_id},{ $set: {inventory_id: inventoryId._id}});
        
    })
    res.status(200).json({msg: "Inventory Id added"});
} catch(err){
    console.error(err.message);
    res.status(400).json({ msg: "Server Error", error: err.message});
}
})

router.post("/addProducts", async (req, res) => {
    try{
        const products = await Products.insertMany((req.body),{ordered: true});
        
        res.status(200).json({msg: "Product added"})
    } catch(err){
        console.error(err.message);
        res.status(400).json({msg: "Server error", error: err.message});
    }
})

router.post("/addDiscount", async (req,res) => {
    const query = req.body.brand;
    const discount = req.body.discount;
    try{
        await Products.updateMany({discount: {$exists: false}}, {$set: {discount: 25}});
        res.status(200).json({msg: "discount added"})

    }catch(err){
        console.error(err.message);
        res.status(400).json({msg: "Server Error", error: err.message});
    }
})

router.post("/addDiscountedPrice", async (req, res) => {
  try { 
    let products = await Products.find(
      { discount: { $exists: true } },
    );
    products.forEach(async (item) => {
        let disPrice = Math.round(item.price - (item.price * (item.discount/100))) ;
        console.log(disPrice);
        await Products.updateOne({_id: item.id}, {$set: {discountedPrice: disPrice}})
    })
    // products.forEach((item) => {
    //     console.log(item.discount);
    //     if(item.discount){
    //         item.discountedPrice=  (item.price - (item.price * (item.discount/100)));
    //     console.log(item);
    //     }
    // })

    

    console.log(await Products.find(
      { discount: { $exists: true } },
    ));
    
    res.status(200).json({ msg: "discount added" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ msg: "Server Error", error: err.message });
  }
});




module.exports = router;

