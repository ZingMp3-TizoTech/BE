const Services = require('../Service/artist')
async function createArtist(req, res) {
    try {
        var date= new Date()
        console.log(date);
        function titleCase(str) {
            var convertToArray = str.toLowerCase().split(' ');
            var result = convertToArray.map(function(val) {
              return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
            });
            
            return result.join(' ');
          }
          const name=titleCase(req.body.name)
        const a = await Services.createArtists({
            name: name,
            gender:req.body.gender,
            age:req.body.age,
            genre:req.body.genre,
            image: req.body.image
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
async function getAllArtist(req, res)
{
    try {
        const all = await Services.getAllArtist()
       
        if(!all){
            return res.status(402).json({ status: 402, message: "Artist not exist!" })
        }
        return res.status(200).json({ status: 200,data: all })
    } catch (error) {
        console.log(error)
    }
}
async function updateArtist(req, res)
{
    try {
       
        function titleCase(str) {
            var convertToArray = str.toLowerCase().split(' ');
            var result = convertToArray.map(function(val) {
              return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
            });
            
            return result.join(' ');
          }
          const name=titleCase(req.body.name)
        const updated = await Services.updateArtist(
            req.params.id,{
                name: name,
                gender: req.body.gender,
                image:req.body.image,
                age:req.body.age,
                genre:req.body.genre
            }
        )
        console.log(updated);
        if(!updated){
            return res.status(402).json({ status: 402, message: "Artist not exist!" })
        }
        return res.status(200).json({ status: 200,data: updated, message: "Update success!" })
    } catch (error) {
        console.log(error)
    }
}
async function deleteArtist(req, res) {
    try{
        const _id = req.params.id.toString().trim();
      
        const result = await Services.deleteArtist(_id)
        if(!result) {
            return res.status(402).json({status:402, message: "delete fail!"})
        }
        return res.status(200).json({status:200, message: "delete successfully!"})
    } catch (error){
        console.log(erorr);
    }
}
module.exports = {
    createArtist,
    getAllArtist,
    updateArtist,
    deleteArtist
}