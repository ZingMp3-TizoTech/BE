///lấy token mã hóa thành thông tin người dùng, return ra ID ng dùng đăng nhập
const jwt = require("jsonwebtoken");
require("dotenv").config();
function getInforByToken(req, res) {
    try {
        let _id=''
        const token = req.header('Authorization').replace('Bearer ', '')
         if (!token) res.status(401).send({ error: 'Not authorized to access this resource' })
        jwt.verify(token, process.env.JWT_KEY, async (err, data) => {
              _id=data._id   
        }  
        )
        return _id;
    } catch (error) {
        console.log(error);
    }
   
};
module.exports = {
    
    getInforByToken
}