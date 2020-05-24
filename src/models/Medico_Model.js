// --------- Modelo de Medico ---------
const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Definicion del modelo 
    const Medico_Model = sequelize.define('Medico_Model', {
        id_user: Sequelize.INTEGER,

        // Investigar relaciones entre tablas en Sequelize
        id_especialidad: Sequelize.INTEGER,

        cedula: Sequelize.STRING,
        direccion: Sequelize.STRING,
        municipio: Sequelize.STRING,
        estado: Sequelize.STRING,
        pais: Sequelize.STRING,
        telefono: Sequelize.STRING,
    }, {
        tableName: "medico",
        modelName: 'Medico_Model',
        timestamps: false,
        }
    );


module.exports = Medico_Model;
