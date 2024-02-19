const { validationResult } = require("express-validator")
const bcrypt = require('bcryptjs');
const User = require('../models/User')
const jwt = require('jsonwebtoken');
require('dotenv').config();


async function registerUser(req, res) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }
    const {name, email, telephone, password} = req.body;
    try{
        let user = await User.findOne({email})
        if(user){
            res.status(400).json({msg: "User already exists"})
        }

        user = new User({
            name,
            email,
            telephone,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt)

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        const token = jwt.sign(
            payload, 
            process.env.SECRET, 
            {expiresIn: 360000},
        );
        res.cookie("token", token, {
            secure: true,
            httpOnly: false,
            sameSite: 'none',
        });
        res.status(200).json( {msg: "User registered successfully", userId: user.id})
    } catch(err){
        console.error(err.message);
        res.status(500).json({msg: 'Server error', error: err.message});
    }
   
}

async function authUser (req, res, next){
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err){
        res.status(500).json({msg: 'Server error', error: err.message})
    }

}

async function loginUser(req, res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({ errors: errors.array()});
    }

    const {email, password} = req.body;
    
    
    try{
        
        const user = await User.findOne({email});
        
       
        if(!user){
            return res.status(400).json({msg: "Invalid Credential"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        

        if(!isMatch){
            return res.status(400).json({ msg: "Invalid Credentials"});
        }

        const payload = {user: {
            id: user.id
        }}

        const token = jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: 3600000},
        )
       
        res.cookie("token", token,{
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        })
        res.status(200).json({ msg: "User Logged in successfully", userName: user.name });
    }catch(err){
        console.error(err.message);
        return res.status(500).json({ msg: "Server error", error: err.message});
    }
}

async function GetUserName(req, res){
    // Store the token from the cookies
    const token = req.cookies.token;
    // Check if the token is present
    if (!token) {
        // If token is present, send status as 401(Unauthorized) along with msg no token found
        return res.status(401).json({ msg: "no token found" });
    }
    try {
        // Store the decoded json web token with the Secret key
        const decoded = jwt.verify(token, process.env.SECRET);
        // Store the user Id from the decoded json web token
        const UserId = decoded.user.id;
        // Find the user for the given userId and select only the name
        const userName = await User.find({ _id: UserId }).select("name");
        // Send the status 200(All Ok) along with the username as json object
        res.status(200).json({ userName: userName[0].name });
    } catch (err) {
      // Log the error message to the console
      console.error(err.message);
      // Send the status as 400(Bad Request) along with the error message
      res.status(401).json({ msg: "Token is not valid", error: err.message });
    }
};

module.exports = {registerUser, authUser, loginUser, GetUserName};