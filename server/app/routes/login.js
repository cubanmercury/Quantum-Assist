const express = require('express');
const router = express.Router();
const db = require('../models/db.js');
const bcrypt = require('bcryptjs');

router.post('/', (req, res, next) => {
    const data = req.body;
    const sess = req.session;
    console.log(sess.user);
    if(!sess.user){
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
                //find user in db
                conn.query('SELECT * FROM users WHERE u_username LIKE ?', data.u_username, (err, result, fields) => {
                    if (err){
                        console.log(err);
                        conn.release();
                    }
                    else if(!result[0]){
                        conn.release();
                        return res.status(401).json({
                            err: "Username Incorrect"
                        })
                    }else{
                        if(result[0]){
                            //compare hashedPwd using bcrypt
                            if(bcrypt.compareSync(data.u_hashedPwd, result[0].u_hashedPwd) == false){  
                                conn.release();
                                return res.status(401).json({
                                    err: "Incorrect Password"
                                });
                            }
                            else{
                                conn.release();
                                sess.user = data.u_username;
                                console.log("user logged in: " + sess.user);
                                sess.save();
                                return res.status(201).json({
                                    message: "Login Successful"
                                });
                            }
                        }
                    }
                    
                });
            }
        }); 
    }
    else{
        req.status(401).json({
            err: "Already logged in"
        })
    }
    
});

module.exports = router;