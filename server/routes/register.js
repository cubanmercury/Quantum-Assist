const express = require('express');
const router = express.Router();
const db = require('../models/db.js');

router.post('/', (req, res, next) => {
    const data = req.body;
    db.getConnection((err, conn) => {
        if(err){
            console.log("DB Connection Failed" + err);
        }
        else if(!data.u_username || !data.u_email || !data.u_name || !data.u_hashedPwd){
            console.log("register fields empty");
            return res.redirect(400, '/register?reg=empty');
        }
        else{
            conn.query('SELECT * FROM users WHERE u_email LIKE ?', data.u_email, (err, result, fields) => {
                if (err){
                    console.log(err);
                }
                else if(result[0]){
                    console.log("user already exists");
                    console.log(result);
                    conn.release();
                    return res.redirect(400, '/register?reg=userexists');
                }
                else{
                    const insertSql = "INSERT INTO users (u_username, u_email, u_name, u_hashedPwd, u_signedUp) VALUES (?, ?, ?, ?, ?)";
                    const insertSqlValues = [data.u_username, data.u_email, data.u_name, data.u_hashedPwd, data.u_signedUp];
                    console.log(insertSqlValues);
                    conn.query(insertSql, insertSqlValues, (err, result, fields) => {
                        if(err){
                            console.log(err);
                        }
                        else{
                            //console.log(result);
                            //console.log(fields);
                        }
                        conn.release();
                        return res.redirect(201, '/register');
                    });
                }
            })
        }
    })
})

module.exports = router;