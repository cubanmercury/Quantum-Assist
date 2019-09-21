//required in config/db.config.js

module.exports = (sequelize, Sequelize) => {
    const Isotope = sequelize.define('isotope' , {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false
        },
        atomic_number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        isotope_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mass_number: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        abundance: {
            type: Sequelize.FLOAT
        },
        most_common: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });
    return Isotope;
}