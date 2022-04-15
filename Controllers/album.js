const Services = require('../Service/album')
async function createAlbum(req, res) {
    try {
        var date= new Date()
        console.log(date);
        const album = await Services.createAlbum({
            name: req.body.name,
            date_create: date,
            artist:req.body.artist
           
        })

        if (!album) {
            return res.status(400).json({ status: 400, message: "Creating failed album!" })
        } else
            return res.status(200).json({ status: 200, data: album, message: "Create album succesfully!" })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createAlbum
   
}