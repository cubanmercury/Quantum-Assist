const express = require('express');
const router = express.Router();
const passport = require('passport');

//create new user route -- see config/passport/passport.js
router.post('/', passport.authenticate('localRegister', {
    successRedirect: '/user',
    failureRedirect: '/register'
}));

router.get('/', (req, res) => {
    res.status(200).send('register route get request');
});

module.exports = router;