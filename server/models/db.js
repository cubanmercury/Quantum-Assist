const mysql = require('mysql');
const config = require('../src/config/config');


const conn = mysql.createConnection(config.db);

conn.connect((err) => {
    if(err){
        console.log("DB Connection Failed \n" + err);
    }
    else{
        console.log("DB Connection Successful");
    }
})

module.exports = conn;