const Services = require('../Service/genre')
async function createGenre(req, res) {
    try {
        const gn = await Services.createGenre({
            zone: req.body.zone,
            image: req.body.image,
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

async function deleteGenre(req, res) {
    try{
        const _id = req.params.id.toString().trim();
        console.log(_id);
        const result = await Services.deleteGenre(_id)
        if(!result) {
            return res.status(402).json({status:402, message: "delete fail!"})
        }
        return res.status(200).json({status:200, message: "delete successfully!"})
    } catch (error){
        console.log(erorr);
    }
}

async function updateGenre(req, res) {
    try {
        
        const updated = await Services.updateGenre(
            req.params.id, {
                zone: req.body.zone,
                image: req.body.image
            }
        )
        console.log(updated);
        if(!updated) {
            return res.status(402).json({status: 402, message:"Update fail!"})
        }
        return res.status(200).json({status:200, message:"Update successfully"})
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    createGenre,
    getAllGenre,
    deleteGenre,
    updateGenre,
    
}