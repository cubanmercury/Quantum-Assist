const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/ping', (req, res) => {
    res.status(200).send("pong");
});

//Passport user authentication route for login see config/passport/passport.js
router.post('/', passport.authenticate('localLogin', {
    successRedirect: '/user',
    failureRedirect: '/register'
}));

module.exports = router;
