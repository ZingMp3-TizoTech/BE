const jwt = require("jsonwebtoken");
require("dotenv").config();
function authenToken(req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '')
    if (!token) res.status(401).send({ error: 'Not authorized to access this resource' })
    jwt.verify(token, process.env.JWT_KEY, (err, data) => {

        var roles = ''
        if (data.role == "62562a5a4c27f03d629f540b") {
            roles = "user";
        }
        else {
            roles = "admin";
        }
        if (roles == "admin") {
            next()
        } else {
            res.status(401).send({ message: 'Not authorized to access this resource' })
        }
        console.log(roles);
    })
};
module.exports = authenToken
