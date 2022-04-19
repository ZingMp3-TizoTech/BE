const mongoose = require("mongoose");
require("dotenv").config();
const songs = new mongoose.Schema({
    name: {
        type: String,
        required: true,
       
    },
    url:{
        type: String,
        required: true,       
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
    },
    image:{
        type:[String],
        required:true
    },
    album:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
    }
    

})
const Songs = mongoose.model('Songs', songs)
module.exports = Songs;