const Repository = require('../Repository/songs')

async function createSong(params){
    try {
        const song= await Repository.createSong(params)
        return song
    } catch (error) {
        console.log(error)
    }
}
async function getAllSong()
{
    try {
        const allsongs = await Repository.getAllSongs()
        return allsongs
    } catch (error) {
        console.log(error)
    }
}
async function deleteSong(_id){
    try {
        const result = await Repository.deleteSong(_id);
        return result;
    } catch (error) {
        console.log(error);
    }
}
async function updateSong(id, params){
    try {
        const song = await Repository.updateSong(id, params)
        return song
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createSong,
    getAllSong,
    deleteSong,
    updateSong
}