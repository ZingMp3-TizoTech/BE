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
async function getPlaylistByUser(id)
{
    try {
        const byID = await Repository.getPlaylistByUser(id)
        return byID
    } catch (error) {
        console.log(error)
    }
}
async function getPlaylistById(id)
{
    try {
        const byID = await Repository.getPlaylistById(id)
        return byID
    } catch (error) {
        console.log(error)
    }
}
async function addSongToPlaylist(id,params){
    try {
        const added = await Repository.addSongToPlaylist(id,params);
        return added;
    } catch (error) {
        console.log(error);
    }
}
async function removeSongFromPlaylist(id,params){
    try {
        const removed = await Repository.removeSongFromPlaylist(id,params);
        return removed;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
    getAllPlaylist,
    getPlaylistByUser,
    getPlaylistById,
    addSongToPlaylist,
    removeSongFromPlaylist
}