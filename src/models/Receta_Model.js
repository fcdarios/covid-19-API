const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Definicion del modelo
const Receta_Model = sequelize.define('Receta_Model', {
        id_consulta: Sequelize.INTEGER,
        recomendaciones: Sequelize.STRING,
        canalizar: Sequelize.BOOLEAN,
        fecha: Sequelize.DATE,
    }, {
        tableName: "receta",
        modelName: 'Receta_Model',
        timestamps: false,
    }
);

module.exports = Receta_Model;