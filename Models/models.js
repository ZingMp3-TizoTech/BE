const mongoose = require("mongoose");

const Students = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  faculty :{
    type:String,
  }
});


const Student = mongoose.model("Student", Students);

module.exports = Student;