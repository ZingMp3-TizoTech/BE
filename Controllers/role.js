const Services = require('../Service/role')
async function createRole(req, res) {
    try {
        const rl = await Services.createRole({
            name: req.body.name
        })
        if (!rl) {
            return res.status(400).json({ status: 400, message: "Creating failed Role!" })
        }
        else {
            return res.status(200).json({ status: 200, data: rl, message: "Create Role Succesfully!" })
        }
    } catch (error) {
        console.log(error)
    }
}
async function deleteRole(req, res) {
    try {
        const _id =req.params.id.toString().trim();
        console.log(_id);
        const result =  await Services.deleteRole(_id)
        console.log(result);
        if(!result){
            return res.status(402).json({status:402,message:"delete fails!"})
        }
        return res.status(200).json({status:200,message:"delete successfully!"})
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createRole,
    deleteRole
}