const express=require("express");
const router=express.Router();
const {register,login,getuser} =require('../controllers/userControllers')
const {protect}=require('../middleware/auth')
router.post("/register",register);
router.post("/login",login);
router.get('/getuser',protect,getuser)
module.exports=router;