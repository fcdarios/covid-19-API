const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Usar los mismos nombres que la BD
// El id no se pone
// Definicion del modelo
const Enf_Cronica_Model = sequelize.define('Enf_Cronica_Model', {
        enfermedad: Sequelize.STRING,
        description: Sequelize.STRING
    }, {
        tableName: "enf_cronica",
        modelName: 'Enf_Cronica_Model',
        timestamps: false,
    }
);


module.exports = Enf_Cronica_Model;