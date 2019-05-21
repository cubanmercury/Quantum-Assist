// const express = require('express');
// const router = express.Router();
// const db = require('../models/db.js');
// const bcrypt = require('bcryptjs');

// router.post('/', (req, res, next) => {
//     const data = req.body;
//     db.getConnection((err, conn) => {
//         if(err){
//             console.log("DB Connection Failed" + err);
//         }
//         else if(!data.u_username || !data.u_email || !data.u_name || !data.u_hashedPwd){
//             console.log("register fields empty");
//             return res.status(401).send({
//                 err: 'You must fill in all the form fields'
//             })
//         }
//         else{
//             conn.query('SELECT * FROM users WHERE u_email LIKE ?', data.u_email, (err, result, fields) => {
//                 if (err){
//                     console.log(err);
//                 }
//                 else if(result[0]){
//                     console.log("email already used for another user");
//                     console.log(result);
//                     conn.release();
//                     return res.status(401).json({
//                         err: 'Email already used for another account'
//                     })
//                 }
//                 else{
//                     conn.query('SELECT * FROM users WHERE u_username LIKE ?', data.u_username, (err, result, fields) => {
//                         if (err){
//                             console.log(err);
//                         }
//                         else if(result[0]){
//                             console.log("user already exists");
//                             console.log(result);
//                             conn.release();
//                             return res.status(401).send({
//                                 err: 'Username already exists'
//                             })
//                         }
//                         else{
//                             const insertSql = "INSERT INTO users (u_username, u_email, u_name, u_hashedPwd, u_signedUp) VALUES (?, ?, ?, ?, ?)";
//                             const hashedPwd = bcrypt.hashSync(data.u_hashedPwd, 10);
//                             const insertSqlValues = [data.u_username, data.u_email, data.u_name, hashedPwd, data.u_signedUp];
//                             console.log(insertSqlValues);
//                             conn.query(insertSql, insertSqlValues, (err, result, fields) => {
//                                 if(err){
//                                     console.log(err);
//                                 }
//                                 else{
//                                     //console.log(result);
//                                     //console.log(fields);
//                                     conn.release();
//                                     return res.status(201).send({
//                                         message: "User created Successfully"
//                                     })
//                                 }
//                             });
//                         }
//                     })
//                 }
//             })
//         }
//     })
// })

// module.exports = router;