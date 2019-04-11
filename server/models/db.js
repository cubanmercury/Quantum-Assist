const mysql = require('mysql');
const config = require('../src/config/config');


const conn = mysql.createConnection(config.db);

module.exports = conn;