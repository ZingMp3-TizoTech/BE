const Account = require('../Models/account')
const bcrypt = require('bcryptjs')
async function createAccount(params) {
  try {
    const acc = await new Account(params)
    await acc.save()
    await acc.generateAuthToken()
    return acc
  } catch (error) {
    console.log(error)
  }
}

async function login(username, password) {
  try {
    const acc = await Account.findByCredentials(username, password)
    console.log(acc);
    //   const token = await account.generateAuthToken(username, password)
    if (!acc) {
      return new Error("Login Fails!")
    }
    return acc
  }
  catch (error) {
    console.log(error)
  }
}
async function changePassword(id, oldPassword, newPassword) {
 
  try {
    const _id=id
    const newpw = await bcrypt.hash(newPassword, 8)
    const acc = await Account.findById({ _id })
    const confirm = await login(acc.username, oldPassword)
    if (confirm) {
      const change = await Account.findByIdAndUpdate({ _id: id }, { password: newpw }, { new: true })
      console.log("changed password for:");
      console.log(change);
      return change
    }
    
   
  } catch (error) {
    console.log(error);
  }
}
module.exports =
{
  createAccount,
  login,
  changePassword
};