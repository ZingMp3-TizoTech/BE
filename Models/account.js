const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const account = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],

})
account.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    console.log("pass:", user.password);
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
        
    }
    next()
})
account.methods.generateAuthToken = async function () {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

account.statics.findByCredentials = async (username, password) => {
    // Search for a user by email and password.
  
    const user = await Account.findOne({ username })
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
const Account = mongoose.model('Account', account)
module.exports = Account;