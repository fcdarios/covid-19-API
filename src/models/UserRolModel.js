// --------- Modelo de User ---------
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../database');
const User = require('./UserModel');
const Rol = require('./RolModel')

    


// Definicion del modelo de Usuario
    var UserRolModel = sequelize.define('UserRolModel', {

        id_user: {
            type: Sequelize.INTEGER,
            references: {
              // This is a reference to another model
              model: User,
         
              // This is the column name of the referenced model
              key: 'id',
         
              // This declares when to check the foreign key constraint. PostgreSQL only.
              deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
          },
          id_rol: {
            type: Sequelize.INTEGER,
            references: {
              // This is a reference to another model
              model: Rol,
         
              // This is the column name of the referenced model
              key: 'id',
         
              // This declares when to check the foreign key constraint. PostgreSQL only.
              deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
          },
    }, {
        tableName: "user_rol",
        modelName: 'UserRolModel',
        timestamps: false,
    });


module.exports = UserRolModel;


