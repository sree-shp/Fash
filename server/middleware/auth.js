const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req, res, next){
    const token = req.cookies.token;
    // console.log(req);
    

    if(!token){
        return res.status(401).json({ msg: "no token, authorization denied"});
    }

    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        // console.log(decoded)
        
        req.user = decoded.user;
        next();   
    } catch (err){
        res.status(401).json({ msg: "Token is not valid"});
    }

}


module.exports = auth;