const {User, encryptPassword, validatePassword} = require('../models/UserModel');
const jwt = require('jsonwebtoken');


// --------- Controlador para usuarios ---------
class UserController {

    // Recibe las peticiones y regresa una respuesta en formato json
    getAll = async (req, res) => {
        const users = await User.findAll({}).then((data) => {
            res.send(data);
        }).catch((err) => {
            console.log(err);
        });
    };

    logIn = async(req, res) => {
        const {username, password} = req.body;
        console.log(username, ' ', password)


        await User.findAll({
            where: {
                username: username 
            }}).then(async (data) =>  {
                const user = data[0].dataValues;
                const pass = user.password
                
                const isValid = await validatePassword(password, pass);

                if (isValid) {
                    delete user.password

                    // Aqui debe de recuperar los roles del usuario

                    // Crear token para usuario 
                    const token = jwt.sign(user.email, process.env.DB_NAME);
                    user.token = token;

                    // regresar json con informacion del usuario
                    return res.send(user);
                } else {
                    const response = {'message' : 'Incorrect password'};
                    return res.send(response);
                }
                console.log(isValid)
                return res.send('a')
                
        }).catch((err) => {
            console.log(err);
        });
        


        
    };

    getById = async(req, res) => {
        const id = parseInt(req.params.id);
        const users = await User.findAll({
            where: {
                id: id
            }
        }).then(async (data) =>  {
            const user = data[0].dataValues;
            user.password = await encryptPassword(user.password)

            console.log("password: ",user.password)
            

            return res.send(data);
        }).catch((err) => {
            console.log(err);
        });
    };

    add = async(req, res) => {
        const user = req.body;
        user.password = await encryptPassword(user.password)
        User.create(user).then((value) => {
            value.respuesta = "Usuario Agregado"
            res.send(value);
        });
    };

    update = async(req, res) => {
        const user = req.body;
        user.password = await encryptPassword(user.password)

        await User.update(user, {
            where: {
                id: user.id
            }
        }).then((data) => {
            const response = user
            response.message = 'UPDATE'
            res.send(response);
        });
    };


    delete = async(req, res) => {
        const person = req.body;
        const user = await User.destroy({
            where: {
                id: person.id
            }
        }).then((data) => {
            person.response = "Usuario eliminado con exito"
            res.send(person);
        });
    };
}


module.exports = new UserController();