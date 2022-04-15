
const Student = require('../Models/models')

async function createStudent (params){
    try {
        const student = await new Student(params)
        await student.save()
        // const id = student._id
        // const result = await Student.find({_id:id})
        // .populate({
        //         path: 'student',
        //         select: {name: 1, faculty: 1, _id: 0},
        //       })
        return student
    } catch (error) {
        console.log(error)
    }
}
async function updateStudent (id,params){
    try {
        return await Student.findByIdAndUpdate(id, params) 
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createStudent,
    updateStudent,
   
}
