const express = require('express');
const router = express.Router();
const passport = require('passport');

//find user
router.get('/', passport.authenticate('localLogin', {
    successRedirect: '/user',
    failureRedirect: '/login'
}));

module.exports = router;