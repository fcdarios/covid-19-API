// --------- Modelo de CasoCovid ---------
const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Usar los mismos nombres que la BD
// El id no se pone
// Definicion del modelo 
    const Caso_Covid_Model = sequelize.define('Caso_Covid_Model', {
        caso: Sequelize.STRING,
    }, {
        tableName: "caso_covid",
        modelName: 'Caso_Covid_Model',
        timestamps: false,
        }
    );


module.exports = Caso_Covid_Model;
