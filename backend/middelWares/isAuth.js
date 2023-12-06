const jwt = require('jsonwebtoken');
const user = require('../models/user');


exports.isAuth = async(req,res,next)=>{

    try {
        const token = req.header('Authorization');
        // decodage 
        const decoded = jwt.verify(token,process.env.private_key);
        if(!decoded){
            return res.status(400).json({msg:"client error"})
        }
        // else implicite
        const rslt = await user.findById(decoded.id); 
        req.user = rslt
        next()
    } catch (error) {
        res.status(500).json({msg:"you are not allowed to do this action"})
    }
}