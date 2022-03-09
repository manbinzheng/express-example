let dotenv = require('dotenv');
dotenv.config('./env');

module.exports = {
    mysql: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
        database: process.env.REDIS_DB,
        prefix: process.env.REDIS_PREFIX
    }
}