const db = require('../config/db.config.js');
const Elements = db.elements;
const Isotopes = db.isotopes;

exports.findAll = (req, res) => {
    Elements.findAll({attributes: ['atomic_number','symbol','name', 'mass_number', 'electron_configuration','e_group', 'e_period', 'block', 'radioactive', 'year', 'ionisation_energy','abundance', 'density', 'melting_point', 'boiling_point', 'electronegativity', 'specific_heat_capacity']})
    .then(elements => {
        res.status(200).send(elements);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
}
exports.isotopes = (req, res) => {
    Isotopes.findAll({attributes: ['id', 'atomic_number', 'isotope_name', 'mass_number', 'abundance', 'most_common']})
    .then(isotopes => {
        res.status(200).send(isotopes);
    }).catch(err => {
        res.status(500).send("Error -> " + err);
    })
}