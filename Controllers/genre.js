const Services = require('../Service/genre')
async function createGenre(req, res) {
    try {
        const gn = await Services.createGenre({
            zone: req.body.zone
        })
        if (!gn) {
            return res.status(400).json({ status: 400, message: "Creating failed Genre!" })
        }
        else {
            return res.status(200).json({ status: 200, data: gn, message: "Create Genre Succesfully!" })
        }
    } catch (error) {
        console.log(error)
    }
}
async function getAllGenre(req,res){
    try {
        const all = await Services.getAllGenre()
        console.log(all);
        if (!all) {
            return res.status(402).json({ status: 402, message: "Genre not exist!" })
        }
        return res.status(200).json({ status: 200, data: all })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createGenre,
    getAllGenre
}