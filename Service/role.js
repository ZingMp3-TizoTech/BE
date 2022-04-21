const Repository = require('../Repository/role')
async function createRole(params){
    try {
        const role = await Repository.createRole(params)
        return role
    } catch (error) {
        console.log(error)
    }
}

async function findRole(name){
    try {
      const  role = await Repository.findRole(name)
      return role
    } catch (error) {
        console.log(error);
    }
}
async function deleteRole(id){
    try {
      const  deleted = await Repository.deleteRole(id)
      return deleted
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
   
    createRole,
    findRole,
    deleteRole
}
 