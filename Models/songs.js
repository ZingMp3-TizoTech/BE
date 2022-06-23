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
    },
    genre:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'genre',
    },
    rates:{
        type:Number
    },
    listens:{
        type: Number
    }
    

})
const Songs = mongoose.model('Songs', songs)
module.exports = Songs;