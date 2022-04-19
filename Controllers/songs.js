const Services = require('../Service/songs')
async function createSong(req, res) {
    try {
       
        const song = await Services.createSong({
            name: req.body.name,
            url:req.body.url,
            artist:req.body.artist,
            image:req.body.image,
            album:req.body.album           
        })

        if (!song) {
            return res.status(400).json({ status: 400, message: "Creating failed song!" })
        } else
            return res.status(200).json({ status: 200, data: song, message: "Create song succesfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function getAllSong(req, res)
{
    try {
        const allsongs = await Services.getAllSong()
        console.log(allsongs);
        if(!allsongs){
            return res.status(402).json({ status: 402, message: "Album not exist!" })
        }
        return res.status(200).json({ status: 200,data: allsongs })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createSong,
    getAllSong
}