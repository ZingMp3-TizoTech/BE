const mongoose = require("mongoose");

require("dotenv").config();
const album = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      
       
    },
    created: {
        type: Date,
        required: true,
       
    },
    artist:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
    },
    songs:[{
        type :mongoose.Schema.Types.ObjectId,
        ref:'Songs'
    }]

})
const Album = mongoose.model('Album', album)
module.exports = Album;