const mongoose = require("mongoose");

const genres = new mongoose.Schema({
  zone:{
    type:String,
    required:true,
  }
});


const genre = mongoose.model("genre", genres);

module.exports = genre;