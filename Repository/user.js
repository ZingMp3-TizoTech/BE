const bcrypt = require('bcryptjs');
const Models = require('../Models/user')
async function createUser(params) {
  try {
    const user = await new Models(params)
    await user.save()
    const acc = user;
    const result = await Models.find({ _id: acc._id }).populate({
      path: 'role',
      select: {name:1},
    })  
    return result
  } catch (error) {
    console.log(error)
  }
}
async function login(email, password) {
  try {
    const acc = await Models.findByCredentials(email, password)
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
  
    const models = await Models.find({ role: "62562a5a4c27f03d629f540b" });
    return models
  } catch (error) {
    console.log(error)
  }
}
  function deleteUser(_id){
   try {
     console.log("id can xoa");
     console.log(_id);
     const removeUser =  Models.findByIdAndDelete(_id)
     return removeUser;
   } catch (error) {
     console.log(error);
     
   }
 }
 async function changePassword(id, oldPassword, newPassword) {
  try {
    console.log("res");
    console.log(id, oldPassword, newPassword);
    const _id=id
    const newpw = await bcrypt.hash(newPassword, 8)
    const acc = await Models.findById({ _id })
    console.log(acc);
    const confirm = await login(acc.email, oldPassword)
    if (confirm) {
      const change = await Models.findByIdAndUpdate({ _id: _id }, { password: newpw }, { new: true })
      console.log("changed password for:");
      console.log(change);
      return change
    } 
  } catch (error) {
    console.log(error);
  }
}
async function getUserByID(id){
  try {  
    const models = await Models.find({_id:id});
    return models
  } catch (error) {
    console.log(error)
  }
}
async function checkEmail(Email){
  try {
    console.log("email la");
    console.log(Email);
    const checked = await Models.findOne({email:Email});
    console.log("da check");
    console.log(checked);
    if(checked){
      return checked
    }  
  } catch (error) {
    console.log(error);
  }
}
async function addSongToLiked(id,id_songs){
    
  try {
    console.log('id songs',id_songs);
     const added=  Models.findByIdAndUpdate(
         { _id: id }, 
         { $addToSet: { liked:id_songs} 
        } 
     );
   
   return added;
  } catch (error) {
      console.log(error);
  }
}
async function removeSongToLiked(id,id_songs){

try {
   const removed=  Models.findByIdAndUpdate(
       { _id: id }, 
       { $pullAll: { liked: [id_songs] } } 
   );
 return removed;
} catch (error) {
    console.log(error);
}
}
module.exports = {
  login,
  createUser,
  getAllUser,
  deleteUser,
  changePassword,
  getUserByID,
  checkEmail,
  addSongToLiked,
  removeSongToLiked
}