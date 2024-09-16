// sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
});

module.exports = sequelize;
