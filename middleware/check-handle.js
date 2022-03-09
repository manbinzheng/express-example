
const apiUtil = require('../utils/api-util')
const { validationResult } = require('express-validator');

const handle = async (req, res, next) => {
    const errors = validationResult(req).errors
    if (errors.length) {
        let message = ""
        errors.forEach(error => {
            message = message + error.param + " " + error.msg + ","
        });
        res.json(apiUtil.fail(apiUtil.ApiCodeParamError))
    } else {
        next()
    }
};

module.exports = handle;
