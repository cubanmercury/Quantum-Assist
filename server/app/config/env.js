// module.exports = {
//     port: 8081,
//     db: {
//         host: process.env.MYSQL_HOST,
//         user: process.env.MYSQL_USER,
//         password: process.env.MYSQL_PASS,
//         database: process.env.MYSQL_DB,
//         connectionLimit: 10,
//         supportBigNumbers: true
//     }
// }

const env = {
    database: process.env.MYSQL_DB,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        accire: 30000,
        idle: 10000
    }
};

module.exports = env;