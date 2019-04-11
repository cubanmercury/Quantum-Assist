const mysql = require('mysql');
const config = require('../src/config/config');


//const conn = mysql.createConnection(config.db);
const pool = mysql.createPool(config.db);

module.exports = pool;