const jwt = require("jsonwebtoken");
const Repository = require('../Repository/role')
require("dotenv").config();
 function authenToken(req, res, next) {
    const token =   req.header('Authorization').replace('Bearer ', '')
     if (!token) res.status(401).send({ error: 'Not authorized to access this resource' })
    jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
        let  id=data._id    
        console.log("reoloo");
        const rl =  await Repository.findRoleByID(data.role)
        console.log(rl.name);     
        if (rl.name == "Admin") {        
            next()
        }  
        else {
            res.status(401).send({ message: 'Not authorized to access this resource' })
        }    
       return id;
    }  
    )
};

module.exports = {
    authenToken

}
