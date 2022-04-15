const Repository = require('../Repository/class')

async function createClass (params){
    try {
        const new_class = await Repository.createClass(params)
        return new_class
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
   
    createClass
}