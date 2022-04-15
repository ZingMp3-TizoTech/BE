const mongoose = require("mongoose");

require("dotenv").config();
const playlist = new mongoose.Schema({
    name: {
        type: String,
        required: true,
       
    },
    date_create: {
        type: Date,
        required: true,
        minlength: 5
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },

})
const Playlist = mongoose.model('Playlist', playlist)
module.exports = Playlist;