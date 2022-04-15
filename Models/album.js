const mongoose = require("mongoose");

require("dotenv").config();
const album = new mongoose.Schema({
    name: {
        type: String,
        required: true,
       
    },
    date_create: {
        type: Date,
        required: true,
       
    },
    artist:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
    },

})
const Album = mongoose.model('Album', album)
module.exports = Album;