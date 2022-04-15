const Services = require('../Service/user')
const jwt = require('jsonwebtoken');
require("dotenv").config();
async function Signup(req, res) {
    try {
        console.log(req.body);
        const user = await Services.Signup({
            email: req.body.email,
            password: req.body.password,
            role:"62562a5a4c27f03d629f540b"
        })

        if (!user) {
            return res.status(400).json({ status: 400, message: "Creating failed user!" })
        } else
            return res.status(200).json({ status: 200, data: user, message: "Create user succesfully!" })
    } catch (error) {
        console.log(error)
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body
        console.log(req.body);
        const account = await Services.login(email, password)

        if (!account) {
            return res.status(400).json({ status: 400, message: "Login Fails!" })
        }
        return res.status(200).json({ status: 200,  token: jwt.sign({ _id: account._id,email:account.email,role:account.role }, process.env.JWT_KEY), message: "Succesfully Login" })
    } catch (error) {
        console.log(error)
    }
}
async function getAllUser(req, res)
{
    try {
        const alluser = await Services.getAllUser()
        console.log(alluser);
        if(!alluser){
            return res.status(402).json({ status: 402, message: "Users not exist!" })
        }
        return res.status(200).json({ status: 200,data: alluser })
    } catch (error) {
        console.log(error)
    }
}

async function  deleteUser(req,res){
    try {
        const _id =req.params.id.toString().trim();
        console.log(_id);
        const result =  await Services.deleteUser(_id)
        console.log(result);
        if(!result){
            return res.status(402).json({status:402,message:"delete fails!"})
        }
        return res.status(200).json({status:200,message:"delete successfully!"})
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    Signup,
    login,
    getAllUser,
    deleteUser
}