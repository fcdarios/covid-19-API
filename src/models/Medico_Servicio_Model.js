const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Definicion del modelo
const Medico_Servicio_Model = sequelize.define('Medico_Servicio_Model', {
        id_medico: Sequelize.INTEGER,
        id_servicio: Sequelize.INTEGER,
        costo: Sequelize.DOUBLE
    }, {
        tableName: "medico_servicio",
        modelName: 'Medico_Servicio_Model',
        timestamps: false,
    }
);

module.exports = Medico_Servicio_Model;