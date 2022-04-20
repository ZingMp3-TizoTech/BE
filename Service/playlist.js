const Repository = require('../Repository/playlist')

async function createPlaylist(params){
    try {
        const playlist= await Repository.createPlaylist(params)
        return playlist
    } catch (error) {
        console.log(error)
    }
}
async function updatePlaylist(id, params){
    try {
        const playlist = await Repository.updatePlaylist(id, params)
        return playlist
    } catch (error) {
        console.log(error)
    }
}
async function deletePlaylist(_id){
    try {
        const result = await Repository.deletePlaylist(_id);
        return result;
    } catch (error) {
        console.log(error);
    }
}
async function getAllPlaylist()
{
    try {
        const allplaylists = await Repository.getAllPlaylist()
        return allplaylists
    } catch (error) {
        console.log(error)
    }
}
async function getPlaylistByIdUser(id)
{
    try {
        const byID = await Repository.getPlaylistByIdUser(id)
        return byID
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
    getAllPlaylist,
    getPlaylistByIdUser
}