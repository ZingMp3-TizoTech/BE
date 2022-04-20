const Services = require('../Service/playlist')
async function createPlaylist(req, res) {
    try {
        var date= new Date()
        console.log(date);
        const playlist = await Services.createPlaylist({
            name: req.body.name,
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
        const updated = await Services.updatePlaylist(
            req.params.id,{
                name: req.body.name,
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
async function getPlaylistByIdUser(req,res) {
    try {
        const id = req.params.id.toString().trim();
        const all = await Services.getPlaylistByIdUser(id)
        console.log(all);
        if (!all) {
            return res.status(402).json({ status: 402, message: "Playlist not exist!" })
        }
        return res.status(200).json({ status: 200, data: all })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
    getAllPlaylist,
    getPlaylistByIdUser
   
}