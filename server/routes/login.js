const express = require('express');
const router = express.Router();
const db = require('../models/db.js');
const bcrypt = require('bcryptjs');

router.post('/', (req, res, next) => {
    const data = req.body;
    db.getConnection((err, conn) => {
        if(err){
            console.log("DB Connection Failed" + err);
        }
        else if(!data.u_username || !data.u_hashedPwd){
            console.log("Login fields empty");
            return res.status(400).send({
                err: 'You must fill in all the form fields'
            });
        }
        else{
            conn.query('SELECT * FROM users WHERE u_username LIKE ?', data.u_username, (err, result, fields) => {
                if (err){
                    console.log(err);
                    conn.release();
                }
                else if(result[0]){
                    if(bcrypt.compareSync(data.u_hashedPwd, result[0].u_hashedPwd) == false){
                        conn.release();
                        return res.status(400).json({
                            err: "Incorrect Password"
                        });
                    }
                    else{
                        conn.release();
                        return res.status(201).json({
                            message: "Login Successful"
                        });
                    }
                }
            });
        }
    });
});

module.exports = router;