const jwt = require("jsonwebtoken");
const Repository = require('../Repository/role')
const RepositoryRole = require('../Models/role')
require("dotenv").config();
const authenToken = async (req, res, next) => {
    const token = await req.header('Authorization').replace('Bearer ', '')
    if (!token) res.status(401).send({ error: 'Not authorized to access this resource' })
    const data = jwt.verify(token, process.env.JWT_KEY)
    console.log(data);
  
    try {
      console.log(data);
      let id = data._id  
      const rl = await RepositoryRole.findById({ _id: data.role })   
      if (rl.name == "Admin") {
        next()
      }
      else {
        res.status(401).send({ message: 'Not authorized to access this resource' })
      }
      return id;
  
    } catch (error) {
      console.log(error);
    }
  };
module.exports = {
    authenToken
}
