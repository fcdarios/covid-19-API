// --------- Modelo de User ---------
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Definicion del modelo de Usuario
    var User = sequelize.define('User', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        tableName: "users",
        modelName: 'User' // We need to choose the model name
    });

module.exports = User;
