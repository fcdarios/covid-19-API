// --------- Modelo de Paciente ---------
const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Usar los mismos nombres que la BD
// El id no se pone
// Definicion del modelo 
    const Paciente_Model = sequelize.define('Paciente_Model', {
        id_user:  Sequelize.INTEGER,
        direccion: Sequelize.STRING,
        municipio: Sequelize.STRING,
        estado: Sequelize.STRING,
        pais: Sequelize.STRING,
        telefono: Sequelize.STRING,
        nacimineto: Sequelize.DATE,
        caso_covid19: Sequelize.INTEGER,
    }, {
        tableName: "paciente",
        modelName: 'Paciente_Model',
        timestamps: false,
        }
    );


module.exports = Paciente_Model;
