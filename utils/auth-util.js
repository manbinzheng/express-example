const jwt = require("jsonwebtoken")
const dotenv = require('dotenv');
dotenv.config('./env');


const verify = function (token) {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
}
const sign = function (object) {
    return jwt.sign(object, process.env.JWT_SECRET_KEY)
}

module.exports = {
    verify, sign
}