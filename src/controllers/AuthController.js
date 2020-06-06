const {User, encryptPassword, login} = require('../models/UserModel');
const UserRolModel = require('../models/UserRolModel');
const jwt = require('jsonwebtoken');


// --------- Controlador para usuarios ---------
class AuthController {

    
    logIn = async(req, res) => {
        const data = req.body;
        await login(data, res);
        const user = res.user

        
        return res.json(user)
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
            await UserRolModel.create(UserRol).then((response) => {
                delete value.id;
                delete value.password; 
                const token = jwt.sign(value.id, process.env.DB_NAME);
                
                usuario.id = value.id;
                usuario.name = value.name;
                usuario.email = value.email;
                usuario.username = value.username
                usuario.token = token;
                usuario.roles = roles;
                delete usuario.id;
                delete usuario.password;
                console.log(usuario);
                return res.status(200).json(usuario)
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
        const token = req.headers['access-token'];

        if (!token) {
            return res.status(401).json({
                auth: false,
                message : "Token no encontrado"
            });
        }
        jwt.verify(token, process.env.DB_NAME, (err, data) => {
            if (err)  return res.sendStatus(403);
            else {
                res.id_user = data
                next();
            }
        });

        
        
    };

}


module.exports = new AuthController();