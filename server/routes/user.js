const express = require("express");
const router = express.Router();
const Controller = require('../controllers/user');
const { check,validationResult, body } = require("express-validator");
const User = require('../models/User');
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken")




router.post(
    "/register", 
    [
        body("name", "First Name is required").not().isEmpty() ,
        body("email", "Enter a valid email address").isEmail(),
        body("password", "Enter a password with over 6 and under 32 characters").isLength({min: 6}),
        body("telephone", "Enter a valid Phone number").isLength(10)
    ],

    Controller.registerUser
);

router.get("/getUserName", async (req, res) => {
    const token = req.cookies.token;
    console.log(token)
    if(!token){
        return res.status(401).json({msg: "no token found"})
    }

    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        const UserId = decoded.user.id;
        console.log(UserId)
        const userName = await User.find({_id: UserId}).select("name");
        console.log(userName)
        res.status(200).json({userName: userName[0].name});
           
    } catch (err){
        console.error(err.message)
        res.status(401).json({ msg: "Token is not valid", error: err.message});
    }
});

router.post(
    '/login', 
    [
        body(body("email", "Enter a valid email address").isEmail(),
        body("password", "Password is required ").exists(),)
    ],
    Controller.loginUser
)

module.exports = router;