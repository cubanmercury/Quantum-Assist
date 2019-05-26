const Sequelize = require("sequelize");
const sequelize = require("../config/db.config.js");

const User = sequelize.define('user', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    u_email: {
        type: Sequelize.STRING,
        allowNUll: false,
        validate: {
            isEmail: true
        }
    },
    u_name: {
        type: Sequelize.STRING,
        allowNUll: false
    },
    u_hashedPwd: {
        type: Sequelize.STRING,
        allowNUll: false
    },
    is_admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNUll: false
    },
    u_signedUp: {
        type: Sequelize.DATE,
        allowNUll: false
    }
});

module.exports = User;

