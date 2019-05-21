const express = require('express');
const router = express.Router();
const passport = require('passport');

//create new user
router.post('/', passport.authenticate('localRegister', {
    successRedirect: '/user'
}));

module.exports = router;