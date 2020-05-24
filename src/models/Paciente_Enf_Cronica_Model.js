const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Usar los mismos nombres que la BD
// El id no se pone
// Definicion del modelo
const Paciente_Enf_Cronica_Model = sequelize.define('Paciente_Enf_Cronica_Model', {
        id_paciente: Sequelize.INTEGER,
        id_enfermedad: Sequelize.INTEGER
    }, {
        tableName: "paciente_enf_cronica",
        modelName: 'Paciente_Enf_Cronica_Model',
        timestamps: false,
    }
);


module.exports = Paciente_Enf_Cronica_Model;