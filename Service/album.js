const Repository = require('../Repository/album')

async function createAlbum(params){
    try {
        const album= await Repository.createAlbum(params)
        return album
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
   
    createAlbum
}