const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Definicion del modelo
const Medicamento_Model = sequelize.define('Medicamento_Model', {
        nombre: Sequelize.STRING,
        description: Sequelize.STRING,
        dosis: Sequelize.STRING,
        costo: Sequelize.DOUBLE,
    }, {
        tableName: "medicamento",
        modelName: 'Medicamento_Model',
        timestamps: false,
    }
);

module.exports = Medicamento_Model;