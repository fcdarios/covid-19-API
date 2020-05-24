const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Usar los mismos nombres que la BD
// El id no se pone
// Definicion del modelo
const Paciente_Cirugia_Model = sequelize.define('Paciente_Cirugia_Model', {
        id_paciente: Sequelize.INTEGER,
        id_cirugia: Sequelize.INTEGER
    }, {
        tableName: "paciente_cirugia",
        modelName: 'Paciente_Cirugia_Model',
        timestamps: false,
    }
);


module.exports = Paciente_Cirugia_Model;