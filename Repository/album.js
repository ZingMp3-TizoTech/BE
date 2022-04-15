const album = require('../Models/album')

async function createAlbum(params) {
    try {
        const ab = await new album(params)
        await ab.save()

        const list = ab;
        const result = await album.find({ _id: list._id })
            .populate({
                path: 'artist',
                select: { _id: 1, name: 1 },
            })
        return result
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createAlbum
}