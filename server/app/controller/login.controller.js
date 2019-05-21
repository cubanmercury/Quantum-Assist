const db = require('../config/db.config.js');
const User = db.users;

exports.findOne = (req, res) => {
    User.findOne({
        where: {
            u_username: req.body.u_username
        }
    }).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send("User not found");
    })
};