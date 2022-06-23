const mongoose = require("mongoose");

const genres = new mongoose.Schema({
  zone:{
    type:String,
    required:true,
  },
  image:{
    type:[String]
},
});


const genre = mongoose.model("genre", genres);

module.exports = genre;