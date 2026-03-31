const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    password:{
        type:String,min:8
    },
   
},
{
     timeStamps:true/*Automatic updatation of time*/
}

)
module.exports=mongoose.model("userjwt",userSchema)