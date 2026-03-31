const mongoose = require("mongoose");
const empSchema = mongoose.Schema({
  name: {
    type: "String",
    required: [true, "Pls enter name"],
  },
  designation: {
    type: "String",
    required: true,
  },
  address: {
    type: "String",
    required: true,
  },
  ContactNo: {
    type: "Number",
    required: true,
  },
});
module.exports=mongoose.model("employeejwt",empSchema)
