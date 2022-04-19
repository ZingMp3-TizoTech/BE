const album = require('../Models/album')

async function createAlbum(params) {
    try {
        const ab = await new album(params)
        await ab.save()

        const list = ab;
        const result = await album.find({ _id: list._id })
            .populate({
                path: 'artist',
                select: { _id: 1, name: 1 },
            })
        return result
    } catch (error) {
        console.log(error)
    }
}
async function getAllAlbum() {
    try {
      const models = await album.find({})
      .populate({
        path: 'artist',
        select: { _id: 1, name: 1 },
    });
      return models
    } catch (error) {
      console.log(error)
    }
  }

 async function updateAlbum(id,params){
     try {
         const models = await album.findByIdAndUpdate(id,params,{new:true})
        
         return models
     } catch (error) {
         console.log(error);
     }
 } 
module.exports = {
    createAlbum,
    getAllAlbum,
    updateAlbum
}