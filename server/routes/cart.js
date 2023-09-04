const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const auth = require("../middleware/auth");

router.get("/getCart", auth, async (req, res) => {
    const userId = req.user.id;
    try{
        const cart = await Cart.findOne({userId});
        if( cart ){
            return res.status(200).json({cart});
        }else{
            return res.send(null);
        }

    }catch(err){
        console.error(err.message);
        res.status(400).json({msg: "Server error"});
    }
})

router.post("/addToCart", auth, async (req, res) => {
    const userId = req.user.id;
    
    
    const product = {
        id: req.body.productId,
        quantity: req.body.quantity,
        size: req.body.size,
        price: req.body.price,
        img: req.body.img,
        name: req.body.name,
        brand: req.body.brand
    }
    const total = req.body.price * req.body.quantity;
    console.log(total);
    try{
        const cart = await Cart.find({userId});
        
        if(cart.length != 0){
           let cartTotal = cart[0].total +  total;
           await Cart.updateOne({userId}, {$push:{product: product}, $set:{total: cartTotal}});
        } else{
            const cart = new Cart({userId: userId, product: product, total: total});
            
            await cart.save();
        }

        res.status(200).json({msg: "Added to cart"})

    }catch(err){
        console.error(err);
        res.status(400).json({ msg: "Server Error" });
    }
})

router.post("/removeItem", auth, async (req, res) => {
    const userId = req.user.id
    const cartItemId = req.body.id
    console.log(cartItemId)
    try{
        const cart= await Cart.find({userId}).select(
            {product: {$elemMatch: {_id: cartItemId}}}
        );
        const productPrice = cart[0].product[0].price;
        
        await Cart.updateOne({userId: userId}, {
            $pull: {product:   {_id: cartItemId}},
            $inc: {total: -productPrice}
        })
        console.log(await Cart.findOne({userId}))
        res.status(200).json({msg: "Removed from cart"})
    }catch(err){
        console.error(err.message)
        res.status(400).json({ msg: "Server Error" });
    }
})

module.exports = router;