const express = require('express');
const router = express.Router();
const passport = require('passport');

//find user
router.get('/ping', (req, res) => {
    res.status(200).send("pong");
});

// router.post('/', (req, res, next) => {
//     passport.authenticate('localLogin', (err, user, info) => {
//         console.log(err);
//         console.log(user);
//         console.log(info);
//         if(err){
//             res.status(401).send(err);
//         }else if(!user){
//             res.status(401).send(info);
//         }else{
//             next();
//         }
//         res.status(401).send(info);
//     })(req, res);
// },
// (req, res, next) => {
//     res.status(200).send('logged in');
// });

router.post('/', passport.authenticate('localLogin', {
    // successRedirect: '/user',
    // failureRedirect: '/'
}));

module.exports = router;
