const express = require('express');
const router = express.Router();
const db = require('../models/db.js');


router.post('/', (req, res, next) => {
    db.getConnection((err, conn) => {
        if(err){
            console.log("DB Connection Failed" + err);
        }else{
            conn.query('SELECT * FROM users WHERE u_email LIKE ?', req.body.u_email, (err, result, fields) => {
                if (err){
                    console.log(err);
                }
                else if(result[0]){
                    console.log("user already exists");
                    console.log(result);
                    conn.release();
                    res.redirect(400, '/register');
                    return;
                }
                else{
                    const insertSql = "INSERT INTO users (u_username, u_email, u_name, u_hashedPwd, u_signedUp) VALUES (?, ?, ?, ?, ?)";
                    const insertSqlValues = [req.body.u_username, req.body.u_email, req.body.u_name, req.body.u_hashedPwd, req.body.u_signedUp];
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
                        res.redirect(201, '/register');
                    });
                }
            })
            
        }
    })
})

module.exports = router;