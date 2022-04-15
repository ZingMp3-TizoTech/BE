
const Repository = require('../Repository/students')

async function createStudent (params){
    try {
        const student = await Repository.createStudent(params)
        return student
    } catch (error) {
        console.log(error)
    }
}
async function updateStudent(id, params){
    try {
        const student = await Repository.updateStudent(id, params)
        return student
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    createStudent,
    updateStudent,
    
}