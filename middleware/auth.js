const jwt = require("jsonwebtoken");
require("dotenv").config();
function authenToken(req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '')
    if (!token) res.status(401).send({ error: 'Not authorized to access this resource' })
    jwt.verify(token, process.env.JWT_KEY, (err, data) => {
        var roles = ''
        if (data.role == "62562a5a4c27f03d629f540b") {
            roles = "user";
            res.status(401).send({ message: 'Not authorized to access this resource' })
        }
        else {
            roles = "admin";
            next()
        }
        console.log(roles);
    })
};
module.exports = authenToken
