const mongoose = require("mongoose");

require("dotenv").config();
const artists = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
    },
    genre:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'genre',
    },
   

})

const Artist = mongoose.model('Artist', artists)
module.exports = Artist;