const Services = require('../Service/class')
async function createClass(req, res) {
    try {
       console.log(req.body);
        const class_of_faculty = await Services.createClass({
            name: req.body.name,
            student: req.body.student,
            total:req.body.total
            
        })
         console.log(class_of_faculty);
        if(!class_of_faculty){
            return res.status(400).json({ status: 400, message: "Creating failed class!" }) 
        }else
        return res.status(200).json({ status: 200, data: class_of_faculty, message: "Create class succesfully!" })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createClass
}