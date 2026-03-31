const mongoose=require("mongoose");
require('dotenv').config();
const ConnectDB=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGOURL);
        console.log("Db Connected");
        
    }
    catch(e){
        console.log(e);
        
    }
}
module.exports=ConnectDB;