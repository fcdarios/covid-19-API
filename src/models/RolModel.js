// --------- Modelo de User ---------
const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./UserModel');


// Definicion del modelo de Usuario
    var Rol = sequelize.define('Rol', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    }, {
        tableName: "rol",
        modelName: 'Rol',
        timestamps: false,
    });


    const roles = async (id_roles, res) => {
        let rol = [];

        for (let index = 0; index < id_roles.length; index++) {
            
            await Rol.findAll({
                where: {
                    id: id_roles[index].id_rol
                }
            }).then((roles) => {
                rol.push(roles[0].name);
            });
        }

        res.roles = rol
    }


    

module.exports = {Rol, roles};
