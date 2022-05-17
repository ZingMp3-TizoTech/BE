const Service=require('../Service/search')

async function searchInAlbum(req, res) {
    try {
      
        const rl = await Service.searchInAlbum({
            key: req.body.key
        })
        if (!rl) {
            return res.status(400).json({ status: 400, message: "Failed" })
        }
        else {
            return res.status(200).json({ status: 200, data: rl, message: "Searching..." })
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    searchInAlbum
}