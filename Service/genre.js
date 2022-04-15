const genre = require('../Repository/genre')

async function createGenre(params){
    try {
        const gn = await genre.createGenre(params)
        return gn
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
   
    createGenre
}
 