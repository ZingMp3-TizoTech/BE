const Services = require('../Service/album')
async function createAlbum(req, res) {
    try {
        var date= new Date()
        console.log(date);
        const album = await Services.createAlbum({
            name: req.body.name,
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
        console.log(allalbum);
        if(!allalbum){
            return res.status(402).json({ status: 402, message: "Album not exist!" })
        }
        return res.status(200).json({ status: 200,data: allalbum })
    } catch (error) {
        console.log(error)
    }
}
async function updateAlbum(req, res)
{
    try {
        var date= new Date()
        console.log(date);
        const updated = await Services.updateAlbum(
            req.params.id,{
                name: req.body.name,
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
module.exports = {
    createAlbum,
    getAllAlbum,
    updateAlbum,
    deleteAlbum
   
}