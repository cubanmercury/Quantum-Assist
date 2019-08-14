const db = require('../config/db.config.js');
const Elements = db.elements;

exports.findAll = (req, res) => {
    Elements.findAll({attributes: ['atomic_number','symbol','name', 'mass_number', 'electron_configuration','e_group', 'e_period', 'block', 'radioactive']})
    .then(elements => {
        res.status(200).send(elements);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
}