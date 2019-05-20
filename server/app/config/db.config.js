const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorAliases: false,

    pool: {
        max: env.pool.max,
        min: env.pool.min,
        acquires: env.pool.acquire,
        idle: env.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models/tables
db.users = require('../models/user.model.js')(sequelize, Sequelize);

module.exports = db;