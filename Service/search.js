const Repository = require('../Repository/feature/search')
async function searchInAlbum(params){
    try {
       
        const searched = await Repository.searchInAlbum(params.key);
        return searched;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    searchInAlbum
}