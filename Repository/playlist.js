const playlist = require('../Models/playlist')

async function createPlaylist (params){
    try {
        const pl = await new playlist(params)
        await pl.save()
      
           const list=pl; 
          const result = await playlist.find({_id:list._id})
          .populate({
                  path: 'user',
                  select: {_id: 1,email:1},
                })
        return result
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    createPlaylist
}