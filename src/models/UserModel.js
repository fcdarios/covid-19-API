// --------- Modelo de User ---------
const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const bcrypt = require('bcryptjs');

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

module.exports = {User, encryptPassword, validatePassword};
