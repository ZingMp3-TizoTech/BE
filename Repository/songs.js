const songs = require('../Models/songs')

async function createSong (params){
    try {
        const pl = await new songs(params)
        await pl.save()     
        const song=pl; 
        const result = await songs.find({_id:song._id})
          .populate({
                  path: 'artist',
                  select: {_id: 1,name:1},
                })
           .populate({
                    path:'album',
                    select:{_id:1,name:1}
                })
        return result
    } catch (error) {
        console.log(error)
    }
}
async function getAllSongs() {
    try {
      const song = await songs.find({})
      .populate({
        path: 'artist',
        select: {_id: 1,name:1},
      })
 .populate({
          path:'album',
          select:{_id:1,name:1}
      })
      return song
    } catch (error) {
      console.log(error)
    }
  }
  async function deleteSong(_id){
    try {
      console.log("id can xoa");
      console.log(_id);
      const removed = await songs.findByIdAndDelete(_id)
      return removed;
    } catch (error) {
      console.log(error);     
    }
  }

  async function updateSong(id,params){
    try {
        const models = await songs.findByIdAndUpdate(id,params,{new:true})
        return models
    } catch (error) {
        console.log(error);
    }
} 
module.exports={
    createSong,
    getAllSongs,
    deleteSong,
    updateSong
}