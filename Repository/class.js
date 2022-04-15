
const ClassOfIt = require('../Models/class')
async function createClass (params){
    try {
        const new_class = await new ClassOfIt(params)
        await new_class.save()
          const id = new_class._id
          const result = await ClassOfIt.find({_id:id})
          .populate({
                  path: 'student',
                  select: {name: 1, faculty: 1, _id: 1},
                })
        return result
    } catch (error) {
        console.log(error)
    }
}

module.exports = {

    createClass
}