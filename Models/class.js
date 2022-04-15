const mongoose = require("mongoose");


const ClassOfIts = new mongoose.Schema({
    name: {
      type:String,
      required:true
    },
    student:[String],
    total:{
      type:Number
    }
  })
  const ClassOfIt = mongoose.model("ClassOfIt", ClassOfIts);
  module.exports = ClassOfIt;