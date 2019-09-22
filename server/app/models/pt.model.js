//required in config/db.config.js

module.exports = (sequelize, Sequelize) => {
    const Element = sequelize.define('element', {
        atomic_number: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            allowNull: false
        },
        symbol: {
            type: Sequelize.STRING,
            allowNull: false
        },
        name: { 
            type: Sequelize.STRING,
            allowNull: false
        },
        mass_number: {
            type: Sequelize.FLOAT
        },
        electron_configuration: {
            type: Sequelize.STRING
        },
        e_group: {
            type: Sequelize.INTEGER
        },
        e_period: {
            type: Sequelize.INTEGER
        },
        year: {
            type: Sequelize.INTEGER
        },
        ionisation_energy: {
            type: Sequelize.FLOAT
        },
        abundance: {
            type: Sequelize.FLOAT
        },
        density: {
            type: Sequelize.FLOAT
        },
        melting_point: {
            type: Sequelize.INTEGER
        },
        boiling_point: {
            type: Sequelize.INTEGER
        },
        electronegativity: {
            type: Sequelize.FLOAT
        },
        specific_heat_capacity: {
            type: Sequelize.FLOAT
        },
        radioactive: {
            type: Sequelize.BOOLEAN
        },
        block: {
            type: Sequelize.STRING
        },
        synthetic: {
            type: Sequelize.BOOLEAN
        },
        e_family: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        }
    });
    return Element;
}
