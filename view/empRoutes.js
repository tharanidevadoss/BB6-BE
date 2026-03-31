const express=require('express');
const Router=express.Router();
const {createmployee,updateemployee,deletemployee,getemployee} =require("../controllers/empController")
const {protect}=require("../middleware/auth");

Router.post("/createmp",protect,createmployee);
Router.put("/updatemp/:id",protect,updateemployee);
Router.delete("/deletemp/:id",protect,deletemployee);
Router.get("/getemployee",protect,getemployee)
module.exports=Router;