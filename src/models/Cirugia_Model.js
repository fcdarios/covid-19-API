const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Usar los mismos nombres que la BD
// El id no se pone
// Definicion del modelo
const Cirugia_Model = sequelize.define('Cirugia_Model', {
        cirugia: Sequelize.STRING,
        description: Sequelize.STRING
    }, {
        tableName: "cirugia",
        modelName: 'Cirugia_Model',
        timestamps: false,
    }
);


module.exports = Cirugia_Model;