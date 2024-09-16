// Restaurant.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');

const Restaurant = sequelize.define('Restaurant', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
        adresse: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ville: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        horaires: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        note: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
},
    {
    tableName: 'restaurant', // Specify the table name
});

module.exports = Restaurant;
