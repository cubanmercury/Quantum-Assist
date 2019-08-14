//required in config/db.config.js

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        u_email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        u_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        u_hashedPwd: {
            type: Sequelize.STRING,
            allowNull: false
        },
        is_admin: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        u_signedUp: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });
    return User;
}

