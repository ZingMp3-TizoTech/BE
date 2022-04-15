const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const tableUser = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    role:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'role',
    },
   
})
tableUser.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    console.log("pass:", user.password);
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
        
    }
    next()
})


tableUser.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
  
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    console.log(user.password);
    console.log(password);
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    console.log(isPasswordMatch);
    if (!isPasswordMatch) {
        throw new Error('Invalid login credentials12')
    }
    else { return user }

}
const User = mongoose.model('User', tableUser)
module.exports = User;