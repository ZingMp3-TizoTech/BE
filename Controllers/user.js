const Services = require('../Service/user')
const jwt = require('jsonwebtoken');
const ServiceRole = require('../Service/role');
const { getInforByToken } = require('../middleware/authToken');
require("dotenv").config();
async function Signup(req, res) {
    try {   
            var role =  req.body.role;
            const findRole =  await ServiceRole.findRole(role)
            console.log("log");
            console.log(findRole);
            const user = await Services.Signup({
            email: req.body.email,
            password: req.body.password,
            role: findRole
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
        const account = await Services.login(email, password)

        if (!account) {
            return res.status(400).json({ status: 400, message: "Login Fails!" })
        }
        return res.status(200).json({ status: 200,  token: jwt.sign({ _id: account._id,email:account.email,role:account.role }, process.env.JWT_KEY), message: "Succesfully Login" })
    } catch (error) {
        console.log(error)
    }
}
async function changePassword(req, res) {
    try {
        let id=''
        ///Mã hóa token và trả v
        const token = req.header('Authorization').replace('Bearer ', '')
         if (!token) res.status(401).send({ error: 'Not authorized to access this resource' })
        jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
              id=data._id   
        }  
        )       
        console.log("id la");
        console.log(id);   
        const { oldPassword, newPassword } = req.body
        const account = await Services.changePassword(id,oldPassword, newPassword)

        if (!account) {
            return res.status(400).json({ status: 400, message: "Login Fails!" })
        }
        return res.status(200).json({ status: 200, message: "Successfully Change Password" })
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

 function  deleteUser(req,res){
    try {
        const _id =req.params.id.toString().trim();
        console.log(_id);
        const result =   Services.deleteUser(_id)
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
    deleteUser,
    changePassword
}