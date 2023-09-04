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
            withCredentials: true,
            httpOnly: false,
        });
        res.status(200).json( {msg: "User registered successfully", userId: user.id})
    } catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
   
}

async function authUser (req, res, next){
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err){
        res.status(500).send('Server error')
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
        console.log(isMatch)

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
        console.log(token)
        res.cookie("token", token,{
            withCredentials: true
        })
        res.status(200).json({ msg: "User Logged in successfully", userName: user.name });
    }catch(err){
        console.error(err.message);
        return res.status(500).json({ msg: "Server error"});
    }
}

module.exports = {registerUser, authUser, loginUser};