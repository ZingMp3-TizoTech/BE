const Services = require('../Service/artist')
async function createArtist(req, res) {
    try {
        const a = await Services.createArtists({
            name: req.body.name,
            gender:req.body.gender,
            age:req.body.age,
            genre:req.body.genre
        })
        if (!a) {
            return res.status(400).json({ status: 400, message: "Creating failed Artist!" })
        }
        else {
            return res.status(200).json({ status: 200, data: a, message: "Create Artist Succesfully!" })
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createArtist
}