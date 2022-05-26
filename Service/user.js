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

        return account
    } catch (error) {
        console.log(error)
    }
}
async function changePassword(id, oldPassword, newPassword) {
    try {
        console.log('se');
        console.log(id, oldPassword, newPassword);
        const account = await Repository.changePassword(id, oldPassword, newPassword)
        return account
    } catch (error) {
        console.log(error)
    }
}
async function getAllUser() {
    try {
        const user = await Repository.getAllUser()
        return user
    } catch (error) {
        console.log(error)
    }
}
function deleteUser(_id) {
    try {
        const result = Repository.deleteUser(_id);
        return result;
    } catch (error) {
        console.log(error);
    }
}
async function getUserByID(id) {
    try {

        const account = await Repository.getUserByID(id)
        return account
    } catch (error) {
        console.log(error)
    }
}
async function addSongToLiked(id,id_songs){
    try {
        const added = await Repository.addSongToLiked(id,id_songs);
        return added;
    } catch (error) {
        console.log(error);
    }
}
async function removeSongFromLiked(id,id_songs){
    try {
        const removed = await Repository.removeSongToLiked(id,id_songs);
        return removed;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    Signup,
    login,
    changePassword,
    getAllUser,
    deleteUser,
    getUserByID,
    addSongToLiked,
    removeSongFromLiked
}