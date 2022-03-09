const Sequelize = require('sequelize')
const BaseModel = require('./base')


class User extends BaseModel {
    constructor() {
        super('users', {
            username: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
                validate: { isLowercase: true }
            }
        })
        this.model = super.getModel()
    }
    /**
     * 根据用户id获取用户信息
     * @param {*} id 
     * @returns 
     */
    async findUserById(id) {
        let rname = `${this.R_USER_BY_ID}${id}`
        return this.findAndCache(rname, this.model.findOne({ id }))
    }
}
module.exports = new User()