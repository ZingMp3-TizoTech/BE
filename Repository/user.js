
const Models = require('../Models/user')
async function createUser(params) {
  try {
    const user = await new Models(params)
    await user.save()

    const acc = user;
    const result = await Models.find({ _id: acc._id })
    return result
  } catch (error) {
    console.log(error)
  }
}
async function login(email, password) {
  try {
    const acc = await Models.findByCredentials(email, password)
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
async function getAllUser() {
  try {
    const models = await Models.find({ role: "62562a5a4c27f03d629f540b" })

    return models
  } catch (error) {
    console.log(error)
  }
}
 async function deleteUser(_id){
   try {
     console.log("id can xoa");
     console.log(_id);
     const removeUser = await Models.findByIdAndDelete(_id)
     return removeUser;
   } catch (error) {
     console.log(error);
     
   }
 }
module.exports = {
  login,
  createUser,
  getAllUser,
  deleteUser
}