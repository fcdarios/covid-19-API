const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Usar los mismos nombres que la BD
// El id no se pone
// Definicion del modelo
const Paciente_Alergia_Model = sequelize.define('Paciente_Alergia_Model', {
        id_paciente: Sequelize.INTEGER,
        id_alergia: Sequelize.INTEGER
    }, {
        tableName: "paciente_alergia",
        modelName: 'Paciente_Alergia_Model',
        timestamps: false,
    }
);


module.exports = Paciente_Alergia_Model;