
const Artist = require('../Models/artist')
async function createArtist (params){
    try {
        const artist = await new Artist(params)
        await artist.save()
      
           const acc=artist; 
          const result = await Artist.find({_id:acc._id})
          .populate({
                  path: 'genre',
                  select: {_id: 1,zone:1},
                })
        return result
    } catch (error) {
        console.log(error)
    }
}

  async function getAllArtist()
{
    try {
        const models = await Artist.find({}).populate({
            path: 'genre',
            select: {_id: 1,zone:1},
          })
      
        return models
    } catch (error) {
        console.log(error)
    }
}
async function updateArtist(id,params){
  try {
      const models = await Artist.findByIdAndUpdate(id,params,{new:true})
    
      return models
  } catch (error) {
      console.log(error);
  }
}
module.exports = {
  createArtist,
  getAllArtist,
  updateArtist
}