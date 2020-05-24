// --------- Modelo de User ---------
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../database');
const bcrypt = require('bcryptjs');
const UserRolModel = require('../models/UserRolModel');
const {roles} = require('../models/RolModel');
const jwt = require('jsonwebtoken');


// Definicion del modelo de Usuario
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        tableName: "users",
        modelName: 'User',
        timestamps: false,
        }
    );

  

    const encryptPassword = async (password) => {
       const salt = await bcrypt.genSalt(8);
       return bcrypt.hash(password, salt)
    }

    const validatePassword = (pass1, pass2) => {
        return bcrypt.compare(pass1, pass2)
    }

    const login = async (userData, res) => {
        await User.findAll({
            where: {
                username: userData.username 
            }}).then(async (data) =>  {
                
                if (data[0] !=  null) {
                    const user = data[0].dataValues;
                    const pass = user.password
                    
                    const isValid = await validatePassword(userData.password, pass);

                    if (isValid) {
                        delete user.password  
                        await UserRolModel.findAll(
                            {
                                where: {
                                    id_user: user.id
                                },
                                attributes: ['id_user', 'id_rol'],
                            }
                        ).then(async (data)  =>  {
                            const idsRoles = data;
                            await roles(idsRoles, res)
                            user.roles =  res.roles

                            // Crear token para usuario 
                            const token = jwt.sign(user.id, process.env.DB_NAME);
                            user.token = token;

                            delete res.roles
                            res.user = user
                            return true
                        }).catch((err) => {
                            console.log(err);
                        });
                    } else {
                        const response = { 'message': 'Incorrect password' };
                        return res.status(401).json(response);
                    }
                } else {
                    return res.status(401).json({'message' : 'User not found'})
                }
        }).catch((err) => {
            console.log(err);
        });  
    }


module.exports = {User, encryptPassword, validatePassword, login};
