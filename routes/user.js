let express = require('express');
let router = express.Router();
const UserService = require('../services/UserService')
const auth = require('../middleware/auth')
const { check } = require('express-validator');
const checkHandle = require('../middleware/check-handle')


class UserController {
	static initRouter() {
		router.get('/userinfo',
			[check('user_id').exists()],
			checkHandle,
			async (req, res, next) => {
				
				res.json(await UserService.getUserInfo(req.query.user_id))
			})
		return router
	}
}
module.exports = UserController.initRouter()