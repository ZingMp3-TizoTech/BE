const mongoose = require("mongoose");

const roles = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  }
});


const role = mongoose.model("role", roles);

module.exports = role;