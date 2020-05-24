// --------- Modelo de Especialidad ---------
const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Definicion del modelo 
    const Especialidad_Model = sequelize.define('Especialidad_Model', {
        especialidad: Sequelize.STRING,
        description: Sequelize.STRING,
    }, {
        tableName: "especialidad",
        modelName: 'Especialidad_Model',
        timestamps: false,
        }
    );

module.exports = Especialidad_Model;
