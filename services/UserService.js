const User = require('../models/user')
const BaseService = require('./BaseService')
const apiUtil = require('../utils/api-util')


class UserService extends BaseService {
	constructor() {
		super(User)
		this.model = User
	}
	async getUserInfo(userId) {
		let userInfo = this.model.findUserById(userId)
		return apiUtil.success({ user_info: userInfo })
	}
}
module.exports = new UserService();