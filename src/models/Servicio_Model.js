// --------- Modelo de Servicio ---------
const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Definicion del modelo
const Servicio_Model = sequelize.define('Servicio_Model', {
        servicio: Sequelize.STRING,
        description: Sequelize.STRING,
    }, {
        tableName: "servicio",
        modelName: 'Servicio_Model',
        timestamps: false,
    }
);

module.exports = Servicio_Model;
