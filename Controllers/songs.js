const Services = require('../Service/songs')
async function createSong(req, res) {
    try {
        function titleCase(str) {
            var convertToArray = str.toLowerCase().split(' ');
            var result = convertToArray.map(function(val) {
              return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
            });
            
            return result.join(' ');
          }
          const name=titleCase(req.body.name)
        const song = await Services.createSong({
            name: name,
            url: req.body.url,
            artist: req.body.artist,
            image: req.body.image,
            album: req.body.album,
            genre:req.body.genre,
            rates:req.body.rates,
            listens:req.body.listens
        })

        if (!song) {
            return res.status(400).json({ status: 400, message: "Creating failed song!" })
        } else
            return res.status(200).json({ status: 200, data: song, message: "Create song successfully!" })
    } catch (error) {
        console.log(error)
    }
}

async function getAllSong(req, res) {
    try {
        const allsongs = await Services.getAllSong()
        console.log(allsongs);
        if (!allsongs) {
            return res.status(402).json({ status: 402, message: "Album not exist!" })
        }
        return res.status(200).json({ status: 200, data: allsongs })
    } catch (error) {
        console.log(error)
    }
}
async function getSongsByArtist(req, res) {
    try {
        const id = req.params.id.toString().trim();
        const allsongs = await Services.getSongsByArtist(id)
        console.log(allsongs);
        if (!allsongs) {
            return res.status(402).json({ status: 402, message: "Artist not exist!" })
        }
        return res.status(200).json({ status: 200, data: allsongs })
    } catch (error) {
        console.log(error)
    }
}
async function deleteSong(req, res) {
    try {
        const _id = req.params.id.toString().trim();
        console.log(_id);
        const result = await Services.deleteSong(_id)
        console.log(result);
        if (!result) {
            return res.status(402).json({ status: 402, message: "delete fails!" })
        }
        return res.status(200).json({ status: 200, message: "delete successfully!" })
    } catch (error) {
        console.log(error);
    }
}
async function updateSong(req, res) {
    try {
        function titleCase(str) {
            var convertToArray = str.toLowerCase().split(' ');
            var result = convertToArray.map(function(val) {
              return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
            });
            
            return result.join(' ');
          }
          const name=titleCase(req.body.name)
        const updated = await Services.updateSong(
            req.params.id, {
            name: name,
            url: req.body.url,
            artist: req.body.artist,
            image: req.body.image,
            album: req.body.album,
            genre:req.body.genre,
            rates:req.body.rates,
            listens:req.body.listens
        }
        )
        console.log(updated);
        if (!updated) {
            return res.status(402).json({ status: 402, message: "Song not exist!" })
        }
        return res.status(200).json({ status: 200, data: updated })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createSong,
    getAllSong,
    deleteSong,
    updateSong,
    getSongsByArtist
}