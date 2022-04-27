const Artist = require('../Repository/artist')

async function createArtists(params){
    try {
        const artist = await Artist.createArtist(params)
        return artist
    } catch (error) {
        console.log(error)
    }
}
async function getAllArtist(){
    try {
        const all = await Artist.getAllArtist()
        return all;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
   
    createArtists,
    getAllArtist
}
 