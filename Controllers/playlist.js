const Services = require('../Service/playlist')
const jwt = require("jsonwebtoken");
async function createPlaylist(req, res) {
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
        const playlist = await Services.createPlaylist({
            name: name,
            date_create: date,
            user:req.body.user,
            song:req.body.song
        })

        if (!playlist) {
            return res.status(400).json({ status: 400, message: "Creating failed playlist!" })
        } else
            return res.status(200).json({ status: 200, data: playlist, message: "Create playlist succesfully!" })
    } catch (error) {
        console.log(error)
    }
}
async function updatePlaylist(req, res)
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
        const updated = await Services.updatePlaylist(
            req.params.id,{
                name: name,
                date_create: date,
                user:req.body.user,
                song:req.body.song
            }
        )
        console.log(updated);
        if(!updated){
            return res.status(402).json({ status: 402, message: "Playlist not exist!" })
        }
        return res.status(200).json({ status: 200,data: updated })
    } catch (error) {
        console.log(error)
    }
}
async function deletePlaylist(req, res) {
    try {
        const _id = req.params.id.toString().trim();
        console.log(_id);
        const result = await Services.deletePlaylist(_id)
        console.log(result);
        if (!result) {
            return res.status(402).json({ status: 402, message: "delete fails!" })
        }
        return res.status(200).json({ status: 200, message: "delete successfully!" })
    } catch (error) {
        console.log(error);
    }
}
async function getAllPlaylist(req, res) {
    try {
        const all = await Services.getAllPlaylist()
        console.log(all);
        if (!all) {
            return res.status(402).json({ status: 402, message: "Playlist not exist!" })
        }
        return res.status(200).json({ status: 200, data: all })
    } catch (error) {
        console.log(error)
    }
}
async function getPlaylistById(req, res) {
    try {
        const all = await Services.getPlaylistById(req.params.id)
        console.log(all);
        if (!all) {
            return res.status(402).json({ status: 402, message: "Playlist not exist!" })
        }
        return res.status(200).json({ status: 200, data: all })
    } catch (error) {
        console.log(error)
    }
}
async function getPlaylistByUser(req,res) {
    try {
        let id = ''
        ///Mã hóa token và trả v
        const token = req.header('Authorization').replace('Bearer ', '')
        if (!token) res.status(401).send({ error: 'Not authorized to access this resource' })
        jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
            id = data._id
        }
        )
        console.log("id la");
        const all = await Services.getPlaylistByUser(id)
        console.log(all);
        if (!all) {
            return res.status(402).json({ status: 402, message: "Playlist not exist!" })
        }
        return res.status(200).json({ status: 200, data: all })
    } catch (error) {
        console.log(error)
    }
}
async function addSongToPlaylist(req, res)
{
    try {
      
        const updated = await Services.addSongToPlaylist(
            req.params.id,{               
                song:req.body.song
            }
        )
      
        if(!updated){
            return res.status(402).json({ status: 402, message: "Playlist not exist!" })
        }
        return res.status(200).json({ status: 200,data: updated })
    } catch (error) {
        console.log(error)
    }
}
async function removeSongFromPlaylist(req, res)
{
    try {
      
        const removed = await Services.removeSongFromPlaylist(
            req.params.id,{               
                song:req.body.song
            }
        )       
        if(!removed){
            return res.status(402).json({ status: 402, message: "Playlist not exist!" })
        }
        return res.status(200).json({ status: 200,data: removed })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
    getAllPlaylist,
    getPlaylistByUser,
    getPlaylistById,
    addSongToPlaylist,
    removeSongFromPlaylist
   
}