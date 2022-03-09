const Sequelize = require('sequelize')
const mysql_conf = require('../config/db.js').mysql
const redis_conf = require('../config/db.js').redis
const _redis = require('async-redis')


const mysql = new Sequelize(mysql_conf.database, mysql_conf.username, mysql_conf.password, {
    host: mysql_conf.host,
    port: mysql_conf.port,
    dialect: 'mysql'
});

mysql.authenticate().then(() => {
    console.log('数据库连接成功...')
}).catch(err => { console.error('数据库连接失败...', err) })

const redis = _redis.createClient({
    host: redis_conf.host,
    port: redis_conf.port,
    password: redis_conf.password,
    db: redis_conf.database,
    prefix: redis_conf.prefix
});


module.exports = {
    mysql, redis
}
