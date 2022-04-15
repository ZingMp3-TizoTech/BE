const Services = require('../Service/account')
const jwt = require('jsonwebtoken');
require("dotenv").config();
async function createAccount(req, res) {
    try {
        console.log(req.body);
        const acc = await Services.createAccount({
            username: req.body.username,
            password: req.body.password,//nhầm chỗ này

        })
        console.log(acc);
        if (!acc) {
            return res.status(400).json({ status: 400, message: "Creating failed account!" })
        } else
            return res.status(200).json({ status: 200, data: acc, message: "Create account succesfully!" })
    } catch (error) {
        console.log(error)
    }
}
async function login(req, res) {
    try {

        const { username, password } = req.body
        console.log(req.body);
        const account = await Services.login(username, password)

        if (!account) {
            return res.status(400).json({ status: 400, message: "Login Fails!" })
        }
        return res.status(200).json({ status: 200, data: jwt.sign({ _id: account._id }, process.env.JWT_KEY), message: "Succesfully Login" })
    } catch (error) {
        console.log(error)
    }
}
async function changePassword(req, res) {
    const errorMessage = {
        message: "Old password does not match"
    }
    try {
        const { id, oldPassword, newPassword } = req.body
        console.log("ID");
        console.log(req.body.id);
        console.log(req.body);
        const changepw = await Services.changePassword(id, oldPassword, newPassword)
        if (changepw)
            return res.status(200).json({ status: 200, data: changepw, message: "Succesfully change" })
        else
            return res.status(400).json({ status: 400, data: errorMessage, message: "Change Fails!" })

    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    login,
    createAccount,
    changePassword
}