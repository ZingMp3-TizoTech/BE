const role = require('../Models/role')

async function createRole(params){
    try {
        const rl =  await new role(params)
        await rl.save()
        return rl
        
    } catch (error) {
        console.log(error);
    }
}
async function findRole(name){
    try {
        console.log("nameRole");
        console.log(name);
        const result = await role.findOne({name:name})
        console.log("findRole la`");
        console.log( result);
        return result
    } catch (error) {
        console.log(error);
    }
}
 async function findRoleByID(id){
    try {
        const result = await role.find({_id:id}) 
        console.log(result);   
        return result
    } catch (error) {
        console.log(error);
    }
}
async function deleteRole(id){
    try {
        const result = await role.findByIdAndRemove({_id:id})
       
        return result
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    createRole,
    findRole,
    findRoleByID,
    deleteRole
}