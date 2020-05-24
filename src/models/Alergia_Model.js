const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Usar los mismos nombres que la BD
// El id no se pone
// Definicion del modelo
const Alegia_Model = sequelize.define('Alegia_Model', {
        alergia: Sequelize.STRING,
        description: Sequelize.STRING
    }, {
        tableName: "alergia",
        modelName: 'Alegia_Model',
        timestamps: false,
    }
);


module.exports = Alegia_Model;