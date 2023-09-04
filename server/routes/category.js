const express = require('express');
const router = express.Router();
const productCategory = require('../models/ProductCategory')

router.post("/addCategory", async (req, res) => {
    // const { name, desc } = req.body;
    try{ 
        const category = new productCategory(req.body);
        await category.save();
        res.status(200).json({msg: "Category Added"})

    }catch(err){
        console.error(err.message);
        res.status(400).json({msg: "Server error"});
    }
});

module.exports = router;

