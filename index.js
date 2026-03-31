const express=require("express");
const cors=require('cors')
const ConnectDB = require("./config/db");
const userRoute=require("./view/userRoutes")
const empRoute=require("./view/empRoutes")
const app=express();
app.use(express.json())   //req.body
require('dotenv').config();
const PORT=process.env.PORT;
ConnectDB();
app.use(cors());
app.use("/reg",userRoute)
app.use("/empl",empRoute);
app.get("/",(req,res)=>{
    res.end("Hello")
})
app.listen(PORT,()=>console.log("Server is running",PORT)

)