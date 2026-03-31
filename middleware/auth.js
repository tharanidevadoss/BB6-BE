const jwt=require('jsonwebtoken');
require('dotenv').config();
const User=require('../models/userModels');
const protect=async(req,res,next)=>{
     const token=req.header('Authorization')?.split(" ")[1];   /*To extract only token from authorization */
     
     
     
    if(!token){
        return res.status(403).json({message:"Access denied"});
    }
     jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            res.status(403).json({message:"Invalid or expired token"});
        }
        req.users=user.id;
        console.log(user);
        
        next();
    })
   
}
 module.exports={protect};
