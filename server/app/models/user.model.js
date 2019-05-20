module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        u_username: {
            type: Sequelize.STRING,
            allowNUll: false
        },
        u_email: {
            type: Sequelize.STRING,
            allowNUll: false
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

    return user;
}