const genre = require('../Models/genre')
const songs = require('../Models/songs')
const artists = require('../Models/artist')

async function createGenre(params){
    try {
        const gr =  await new genre(params)
        await gr.save()
        return gr
    } catch (error) {
        console.log(error);
    }
}
async function getAllGenre() {
    try {
      const list = await genre.find({})  
      return list
    } catch (error) {
      console.log(error)
    }
  }
async function updateGenre(id,params){
  try{
    console.log(id);
    const model = await genre.findByIdAndUpdate(id, params,{new:true});
    return model;
  } catch(error) {
    console.log(error);
  }
}
async function deleteGenre(id){
  try{
    console.log(id);
    const removed = await genre.findByIdAndDelete({_id:id})
    return removed
  } catch (error){
    console.log(error);
  }
}
async function getAllSongByGenre(id){
  try {
    console.log('resp',id);
      const all = await artists.find({_id:id}).populate({
        path: 'genre',
        select: {_id: 1,zone:1},
      })
    console.log('all',all[0]._id);
      const findSong = await songs.find(({artist:all[0]._id}))
    return findSong
  } catch (error) {
  console.log(error);    
  }
}

module.exports={
    createGenre,
    getAllGenre,
    deleteGenre,
    updateGenre,
    getAllSongByGenre
}