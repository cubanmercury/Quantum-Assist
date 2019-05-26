const express = require('express');
const router = express.Router();

const users = require('../controller/user.controller.js');

//create new user
router.get('/', (req, res, next) => {
    res.status(200).send("Login Successful");
});
// router.post('/', users.create);

// //retrieve all users
// router.get('/', users.findAll);

// //retrieve user by id
// router.get('/:userId', users.findById);

// //retrieve user by username
// router.get('/:userUsername', users.findByUsername);

// //update user with id
// router.put('/:userId', users.update);

// //delete user with id
// router.delete('/:userId', users.delete);

module.exports = router;