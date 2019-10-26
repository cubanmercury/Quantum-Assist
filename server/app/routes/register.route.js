const express = require('express');
const router = express.Router();
const passport = require('passport');

//create new user route -- see app/config/passport/passport.js
router.post('/', passport.authenticate('localRegister', {
    successRedirect: '/user',
    failureRedirect: '/register',
    // failureFlash: true
}));

router.get('/', (req, res) => {
    res.status(200).send('Registration Failed');
});

module.exports = router;