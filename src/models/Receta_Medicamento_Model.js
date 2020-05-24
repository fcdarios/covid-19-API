const { Sequelize } = require('sequelize');
const sequelize = require('../database');

// Definicion del modelo
const Receta_Medicamento_Model = sequelize.define('Receta_Medicamento_Model', {
        id_medicamento: Sequelize.INTEGER,
        id_receta: Sequelize.INTEGER,
        uso: Sequelize.STRING,
    }, {
        tableName: "receta_medicamento",
        modelName: 'Receta_Medicamento_Model',
        timestamps: false,
    }
);

module.exports = Receta_Medicamento_Model;