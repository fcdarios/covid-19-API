const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Definicion del modelo
const Consulta_Model = sequelize.define('Consulta_Model', {
    id_paciente: Sequelize.INTEGER,
    id_especialidad: Sequelize.INTEGER,
    id_medico: Sequelize.INTEGER,
    sintomas: Sequelize.STRING,
    evidencia: Sequelize.STRING,
    estado: Sequelize.STRING,
    fecha: Sequelize.DATE,
    atendida: Sequelize.BOOLEAN,
}, {
    tableName: "consulta",
    modelName: 'Consulta_Model',
    timestamps: false,
    }
);

module.exports = Consulta_Model;