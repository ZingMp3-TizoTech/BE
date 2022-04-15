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
module.exports = {
    createRole
}