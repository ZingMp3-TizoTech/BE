const genre = require('../Repository/genre')

async function createGenre(params){
    try {
        const gn = await genre.createGenre(params)
        return gn
    } catch (error) {
        console.log(error)
    }
}
async function getAllGenre(){
    try {
        const gn = await genre.getAllGenre()
        return gn
    } catch (error) {
        console.log(error)
    }
}
async function deleteGenre(id){
    try{
        
        const result = await genre.deleteGenre(id);
        return result;
    } catch (error){
        console.log(error);
    }
}
async function updateGenre(id, params){
    try {
        console.log(id);
        const result = await genre.updateGenre(id, params);
        return result;
    } catch(error) {
        console.log(error);
    }
}
async function getAllSongByGenre(id){
    try {
        console.log("test",id);
        const result = await genre.getAllSongByGenre(id);
        return result;
    } catch(error) {
        console.log(error);
    }
}
module.exports = {
   
    createGenre,
    getAllGenre,
    deleteGenre,
    updateGenre,
    getAllSongByGenre
}
 