const Repository = require('../Repository/playlist')

async function createPlaylist(params){
    try {
        const playlist= await Repository.createPlaylist(params)
        return playlist
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
   
    createPlaylist
}