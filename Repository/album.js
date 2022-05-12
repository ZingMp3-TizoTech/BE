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
            .populate({
                path: 'songs',
                select: { _id: 1, name: 1,url:1,image:1 },
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
        select: { _id: 1, name: 1,image:1 },
    }).populate({
        path: 'songs',
        select: { _id: 1, name: 1,url:1,image:1 },
    });
      return models
    } catch (error) {
      console.log(error)
    }
  }
  async function getAlbumByID(id) {
    try {
      const models = await album.find({_id:id})
      .populate({
        path: 'artist',
        select: { _id: 1, name: 1,image:1 },
    }).populate({
        path: 'songs',
        select: { _id: 1, name: 1,url:1,image:1 },
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
 async function deleteAlbum(id){
     try {
         const deleted = await album.findByIdAndRemove(id);
         return deleted
     } catch (error) {
         console.log(error);
     }
 }
 async function addSongToAlbum(id,params){
     console.log(id);
     console.log(params.songs);
     try {
        const added=  album.findOneAndUpdate(
            { _id: id }, 
            { $addToSet: { songs: params.songs } } 
        );
      return added;
     } catch (error) {
         console.log(error);
     }
 }
 async function removeSongFromAlbum(id,params){
    console.log(id);
    console.log(params.songs);
    try {
       const added=  album.findByIdAndUpdate(
           { _id: id }, 
           { $pullAll: { songs: [params.songs] } } 
       );
     return added;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    createAlbum,
    getAllAlbum,
    updateAlbum,
    deleteAlbum,
    getAlbumByID,
    addSongToAlbum,
    removeSongFromAlbum
}