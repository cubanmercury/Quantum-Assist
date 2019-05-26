
//FILE REDUNDANT -> REPLACED WITH PASSPORT FUNCTIONS


const db = require('../config/db.config.js');
const User = db.users;
const bcrypt = require('bcryptjs');

//post a user
// exports.create = (req, res) => {
//     const hashedPwd = bcrypt.hashSync(req.body.u_hashedPwd, 10);
//     User.create({
//         u_username: req.body.u_username,
//         u_email: req.body.u_email,
//         u_name: req.body.u_name,
//         u_name: req.body.u_name,
//         u_hashedPwd: hashedPwd,
//         u_signedUp: new Date()
//     }).then(user => {
//         res.send(user);
//     }).catch(err => {
//         res.status(500).send("Error -> " + err);
//     })
// };

// //fetch all users
// exports.findAll = (req, res) => {
//     User.findAll().then(users => {
//         res.send(users);
//     }).catch(err => {
//         res.status(500).send("Error -> " + err);
//     })
// };

// //find user by ID
// exports.findById = (req, res) => {
//     User.findById(req.params.userId).then(user => {
//         res.send(user);
//     }).catch(err => {
//         res.status(500).send("Error -> " + err);
//     })
// };

// //find user by username
// exports.findByUsername = (req, res) => {
//     User.findAll({
//         where: {
//             username: req.params.userUsername
//         }
//     }).then(user => {
//         res.send(users)
//     }).catch(err => {
//         res.status(500).send("Error -> " + err)
//     })
// };

// //update user
// exports.update = (req, res) => {
//     var user = req.body;
//     const hashedPwd = bcrypt.hashSync(user.u_hashedPwd, 10);
//     User.update({
//         u_username: user.u_username,
//         u_email: user.u_email,
//         u_name: user.u_name,
//         u_hashedPwd: hashedPwd,
//         u_signedUp: user.u_signedUp
//     },
//         {where: {id: req.params.userId}}
//     ).then(() => {
//         res.status(200).send(user);
//     }).catch(err => {
//         res.status(500).send("Error -> " + err);
//     })
// };

// //delete user by id
// exports.delete = (req, res) => {
//     User.destroy({
//         where: {id: req.params.userId}
//     }).then(() => {
//         res.status(200).send('User deleted');
//     }).catch(err => {
//         res.status(500).send("Error -> " + err);
//     })
//}