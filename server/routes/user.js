const express = require("express");
const router = express.Router();
const Controller = require('../controllers/user');
const { check,validationResult, body } = require("express-validator");
const User = require('../models/User');
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken")
const {registerUser, GetUserName} = require("../controllers/user");


// Route to register a new user
router.post(
    "/register", 
    [
        body("name", "First Name is required").not().isEmpty() ,
        body("email", "Enter a valid email address").isEmail(),
        body("password", "Enter a password with over 6 and under 32 characters").isLength({min: 6}),
        body("telephone", "Enter a valid Phone number").isLength(10)
    ],

    registerUser
);

// Route to get user name
router.get("/getUserName", GetUserName);

// Route to login a user
router.post(
    '/login', 
    [
        body(body("email", "Enter a valid email address").isEmail(),
        body("password", "Password is required ").exists(),)
    ],
    Controller.loginUser
)

module.exports = router;