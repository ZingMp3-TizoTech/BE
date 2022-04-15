const Services = require('../Service/playlist')
async function createPlaylist(req, res) {
    try {
        var date= new Date()
        console.log(date);
        const playlist = await Services.createPlaylist({
            name: req.body.name,
            date_create: date,
            user:req.body.user
           
        })

        if (!playlist) {
            return res.status(400).json({ status: 400, message: "Creating failed playlist!" })
        } else
            return res.status(200).json({ status: 200, data: playlist, message: "Create playlist succesfully!" })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createPlaylist
   
}