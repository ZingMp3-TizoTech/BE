const Services = require('../Service/students')
async function createStudent(req, res) {
    try {
       
        const student = await Services.createStudent({
            name: req.body.name,
            faculty:req.body.faculty
            
        })
         console.log("student la",student);
        if(!student){
            return res.status(400).json({ status: 400, message: "Creating failed students!" }) 
        }else
        return res.status(200).json({ status: 200, data: student, message: "Create student succesfully!" })
    } catch (error) {
        console.log(error)
    }
}
async function updateStudent(req, res) {
    try {
       
        const student = await Services.updateStudent(req.params.id,{
            name: req.body.name,
            faculty:req.body.faculty
            
        })
         console.log("student la",student);
        if(!student){
            return res.status(400).json({ status: 400, message: "Updating failed students!" }) 
        }else
        return res.status(200).json({ status: 200, data: student, message: "Update student succesfully!" })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createStudent,
    updateStudent
}