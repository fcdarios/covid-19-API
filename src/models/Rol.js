// --------- Modelo de User ---------
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Definicion del modelo de Usuario
    var Rol = sequelize.define('Rol', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        tableName: "rol",
        modelName: 'Rol',
        timestamps: false,
    });

module.exports = Rol;
