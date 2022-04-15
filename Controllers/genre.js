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
module.exports = {
    createGenre
}