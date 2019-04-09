const mysql = require('mysql');

const DB = function(){};
DB.prototype.createPool = function(){
    return mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'Create_Entropy99',
        database: 'quantum_assist'
    });
}

DB.prototype.getConnection = (pool) => {
    const self = this;
    pool.getConnection((err, connection) => {
        if(err){
            console.log(err);
            return;
        }
        connection.on('error', (err) => {
            if(err.code == 'PROTOCOL_CONNECTION_LOST') {
                connection.destroy();
            }
            else{
                connection.release();
            }
            console.log(err);
            return;
        });
        return(connection);
    })
}

module.exports = new DB();