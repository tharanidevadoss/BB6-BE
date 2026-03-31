const user = require("../models/userModels");
const asynchandler = require("express-async-handler");
const jwt=require('jsonwebtoken');
require('dotenv').config();
const bcrypt=require('bcrypt');
// register
const register = asynchandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Plz fill the fields");
  }
  //user if existed
  const userExists = await user.findOne({ email: email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  //Password hashing
  const saltconfig=parseInt(process.env.SALT)
  const salt=await bcrypt.genSalt(saltconfig);
  // console.log(salt);

  const hashedpassword=await bcrypt.hash(password,salt)
//  console.log(password)
//   console.log(hashedpassword);
  
  

  //save

  const userdet = await user.create({
    name: name,
    email: email,
    password: hashedpassword,
  });
  if (userdet) {
    res.status(200).json({
      _id: userdet.id,
      name: userdet.name,
      email: userdet.email,
    });
  }
});
// login
const login = asynchandler(async (req, res) => {
  const { email, password } = req.body;
  const userexists = await user.findOne({ email: email});
  console.log(userexists);
  if (userexists  && (await bcrypt.compare(password,userexists.password))) {
    res.status(200).json({
      _id: userexists._id,
      name: userexists.name,
      email: userexists.email,
      password: userexists.password,
        token:generatetoken(userexists._id),
    });
  }else{
    res.status(400);
    throw new Error("Invalid email or password")
  }
});
const generatetoken=(id)=>{
    const token=jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"});
    console.log(token);
    return token;
    

}
// getuser
const  getuser=async(req,res)=>{
  let result=await user.find();
  res.status(200).json({result})
}
module.exports = { register, login,getuser };
