const {User, encryptPassword, login} = require('../models/UserModel');
const Medico_Model = require('../models/Medico_Model');
const Paciente_Model = require('../models/Paciente_Model');
const UserRolModel = require('../models/UserRolModel');
const jwt = require('jsonwebtoken');


// --------- Controlador para usuarios ---------
class AuthController {

    logIn = async(req, res) => {
        const data = req.body;
        await login(data, res);
        const user = res.user

        if (user.roles[0] == 'paciente') {
           await Paciente_Model.findAll({
                where: {
                    id_user: user.id
                }
            }).then(async (data) =>  {
                delete user.id
                user.paciente = {};
                user.paciente.direccion = data[0].direccion;
                user.paciente.municipio = data[0].municipio;
                user.paciente.estado = data[0].estado;
                user.paciente.pais = data[0].pais;
                user.paciente.telefono = data[0].telefono;
                user.paciente.nacimineto = data[0].nacimineto;
                user.paciente.caso_covid19 = data[0].caso_covid19;
        
                console.log(data[0])
                return res.json(user)
            }).catch((err) => {
                console.log(err);
            });
        }else{
            await Medico_Model.findAll({
                where: {
                    id_user: user.id
                }
            }).then(async (data) =>  {
                delete user.id
                user.medico = {};
                user.medico.id_especialidad = data[0].id_especialidad;
                user.medico.cedula = data[0].cedula;
                user.medico.direccion = data[0].direccion;
                user.medico.municipio = data[0].municipio;
                user.medico.estado = data[0].estado;
                user.medico.pais = data[0].pais;
                user.medico.telefono = data[0].telefono;
                return res.json(user)
            }).catch((err) => {
                console.log(err);
            });
        }   
    };

    signUp = async (req, res) => {
        const data = req.body;
        let idTypeUser = 3;
        let roles = [];
        if (data.tipo == 'medico') {
            idTypeUser = 2;
            roles = ['medico'];
        }else roles = ['paciente'];

        const usuario = {};
        usuario.id = data.id;
        usuario.name = data.name;
        usuario.email = data.email;
        usuario.username = data.username
        usuario.password = await encryptPassword(data.password)

        await User.create(usuario).then(async (value)  => {
            const UserRol = {
                id_user : value.id,
                id_rol : idTypeUser
            }
            await UserRolModel.create(UserRol).then(async (response) => {
                usuario.id = value.id;
                usuario.name = value.name;
                usuario.email = value.email;
                usuario.username = value.username
                const token = jwt.sign(value.id, process.env.DB_NAME);
                usuario.token = token;
                usuario.roles = roles;
                delete usuario.password;

                if (data.tipo == 'medico') {

                    let medico = {id_user: usuario.id};
                    await Medico_Model.create(medico).then((response => {
                        delete usuario.id;
                        usuario.medico = response.dataValues;
                        delete usuario.medico.id
                        delete usuario.medico.id_user
                        console.log(usuario);
                        return res.status(200).json(usuario)
                    })).catch((error) => {
                        let message = 'Operacion no exitosa'; ////////////////////////////
                        let code = 2;
                        console.log(err)
                        return res.status(401).json({ code, message});
                    });

                }else {

                    let paciente = {id_user: usuario.id};
                    await Paciente_Model.create(paciente).then((response => {
                        delete usuario.id;
                        usuario.paciente = response.dataValues;
                        delete usuario.paciente.id
                        delete usuario.paciente.id_user
                        console.log(usuario);
                        return res.status(200).json(usuario)
                    })).catch((error) => {
                        let message = 'Operacion no exitosa'; ////////////////////////////
                        let code = 2;
                        console.log(err)
                        return res.status(401).json({ code, message});
                    });


                }
            }).catch((err) => {
                let message = 'Operacion no exitosa'; ////////////////////////////
                let code = 2;
                console.log(err)
                return res.status(401).json({ code, message});
            });
        }).catch((err) => {
            let message = '';
            let code = 0;
            if (err.parent.constraint == 'useruq1') {
                message = 'El nombre de usuario ya existe';
                code = 3
            }
            else if(err.parent.constraint == 'useruq2') {
                message = 'El email ya existe';
                code = 4;
            }
            return res.status(400).json({ code, message});
        });
        
    };

    verifyToken = (req, res, next) => {
        const token = req.headers['token'];
        if (!token) {
            return res.status(401).json({
                code: 0,
                auth: false,
                message : "Token no encontrado"
            });
        }
        jwt.verify(token, process.env.DB_NAME, (err, data) => {
            if (err)  return res.status(403).json({
                code: 0,
                auth: false,
                message : "Token invalido"
            });
            else {
                res.id_user = data
                next();
            }
        });

        
        
    };

}


module.exports = new AuthController();