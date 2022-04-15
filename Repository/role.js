const role = require('../Models/role')

async function createRole(params){
    try {
        const rl =  await new role(params)
        await rl.save()
        const result = await Models.find({_id:acc._id})
          .populate({
                  path: 'role',
                  select: {_id: 1,name:1},
                })
        return result
        return rl
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    createRole
}