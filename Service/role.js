const Repository = require('../Repository/role')

async function createRole(params){
    try {
        const new_class = await Repository.createRole(params)
        return new_class
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
   
    createRole
}
 