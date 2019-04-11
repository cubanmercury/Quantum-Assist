module.exports = {
    port: 8081,
    db: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DB,
        connectionLimit: 10,
        supportBigNumbers: true
    }
}