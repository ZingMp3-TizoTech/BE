const Repository = require('../Repository/user')

async function Signup(params) {
    try {
        const acc = await Repository.createUser(params)
        return acc
    } catch (error) {
        console.log(error)
    }
}
async function login(email, password) {
    try {
        const account = await Repository.login(email, password)      
        console.log(account);
        return account
    } catch (error) {
        console.log(error)
    }
}

async function getAllUser()
{
    try {
        const user = await Repository.getAllUser()
        return user
    } catch (error) {
        console.log(error)
    }
}
async function deleteUser(_id){
    try {
        const result = await Repository.deleteUser(_id);
        return result;
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