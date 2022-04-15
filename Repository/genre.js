const genre = require('../Models/genre')

async function createGenre(params){
    try {
        const gr =  await new genre(params)
        await gr.save()
        return gr
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    createGenre
}