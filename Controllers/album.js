const { authenToken } = require('../middleware/auth');
const Services = require('../Service/album')
async function createAlbum(req, res) {
    try {
        var date= new Date()
        console.log(date);
        function titleCase(str) {
            var convertToArray = str.toLowerCase().split(' ');
            var result = convertToArray.map(function(val) {
              return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
            });
            
            return result.join(' ');
          }
          const name=titleCase(req.body.name)
        const album = await Services.createAlbum({
            name: name,
            created: date,
            artist:req.body.artist,
            songs:req.body.songs
           
        })

        if (!album) {
            return res.status(400).json({ status: 400, message: "Creating failed album!" })
        } else
            return res.status(200).json({ status: 200, data: album, message: "Create album succesfully!" })
    } catch (error) {
        console.log(error)
    }
}
async function getAllAlbum(req, res)
{
    try {
        const allalbum = await Services.getAllAlbum()
        if(!allalbum){
            return res.status(402).json({ status: 402, message: "Album not exist!" })
        }
        return res.status(200).json({ status: 200,data: allalbum })
    } catch (error) {
        console.log(error)
    }
}
async function getAlbumByID(req, res)
{   
    try {
        const album = await Services.getAlbumByID(req.params.id)
        
        if(!album){
            return res.status(402).json({ status: 402, message: "Album not exist!" })
        }
        return res.status(200).json({ status: 200,data: album })
    } catch (error) {
        console.log(error)
    }
}
async function updateAlbum(req, res)
{
    try {
        var date= new Date()
        console.log(date);
        function titleCase(str) {
            var convertToArray = str.toLowerCase().split(' ');
            var result = convertToArray.map(function(val) {
              return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
            });
            
            return result.join(' ');
          }
          const name=titleCase(req.body.name)
        const updated = await Services.updateAlbum(
            req.params.id,{
                name: name,
                date_create: date,
                artist:req.body.artist,
                songs:req.body.song
            }
        )
        console.log(updated);
        if(!updated){
            return res.status(402).json({ status: 402, message: "Album not exist!" })
        }
        return res.status(200).json({ status: 200,data: updated })
    } catch (error) {
        console.log(error)
    }
}
async function deleteAlbum(req,res){
    try {
        const id = req.params.id.toString().trim();
        const deleted = await Services.deleteAlbum(id);
        if(!deleted){
            return res.status(402).json({ status: 402, message: "Delete Album Failed!" })
        }
        return res.status(200).json({ status: 200,message: "Delete Album Success!" })
    } catch (error) {
        console.log(error);
    }
}
async function addSongToAlbum(req, res)
{
    try {
      
        const updated = await Services.addSongToAlbum(
            req.params.id,{               
                songs:req.body.song
            }
        )
        console.log(updated);
        if(!updated){
            return res.status(402).json({ status: 402, message: "Album not exist!" })
        }
        return res.status(200).json({ status: 200,data: updated })
    } catch (error) {
        console.log(error)
    }
}
async function removeSongFromAlbum(req, res)
{
    try {
      
        const removed = await Services.removeSongFromAlbum(
            req.params.id,{               
                songs:req.body.song
            }
        )
        console.log(removed);
        if(!removed){
            return res.status(402).json({ status: 402, message: "Album not exist!" })
        }
        return res.status(200).json({ status: 200,data: removed })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createAlbum,
    getAllAlbum,
    updateAlbum,
    deleteAlbum,
    getAlbumByID,
    addSongToAlbum ,
    removeSongFromAlbum
}