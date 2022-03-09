

const User = require('../models/user.js')
const authUtil = require('../utils/auth-util')
const apiUtil = require('../utils/api-util')

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = authUtil.verify(token);
        const user = await User.findUserById(decoded.id);
        if (!user) {
            throw new Error();
        }
        req.user = user;
        next();
    } catch (error) {
        res.json(apiUtil.fail(apiUtil.ApiCodeIdentityError))
    }
};

module.exports = auth;
