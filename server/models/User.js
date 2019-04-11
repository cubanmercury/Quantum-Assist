const db = require('./db.js');

exports.createUser = (u_username, u_email, u_name, u_pwd, res) => {
    var sql = "INSERT INTO users (u_username, u_email, u_name, u_hashedPwd, u_signedUp) VALUES (?, ?, ?, ?, ?)";
    var values = [u_username, u_email, u_name, u_pwd, new Date().toISOString()];
    db.getConnection((err, conn) => {
        if (err){
            console.log(err);
        }
        else{
            conn.query(sql, values, (err, res) => {
                if(err){
                    console.log(err);
                }
                console.log("user created");
                console.log(res.data);
            })
        }
    })
}

module.exports = {
    
}