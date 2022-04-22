const Repository = require('../Repository/album')

async function createAlbum(params){
    try {
        const album= await Repository.createAlbum(params)
        return album
    } catch (error) {
        console.log(error)
    }
}
async function getAllAlbum()
{
    try {
        const allalbum = await Repository.getAllAlbum()
        return allalbum
    } catch (error) {
        console.log(error)
    }
}
async function updateAlbum(id, params){
    try {
        const album = await Repository.updateAlbum(id, params)
        return album
    } catch (error) {
        console.log(error)
    }
}
async function deleteAlbum(id){
    try {
        const deleted = await Repository.deleteAlbum(id);
        return deleted;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createAlbum,
    getAllAlbum,
    updateAlbum,
    deleteAlbum
}