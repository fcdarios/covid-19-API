const {User, encryptPassword} = require('../models/UserModel');


// --------- Controlador para usuarios ---------
class UserController {

    // Recibe las peticiones y regresa una respuesta en formato json
    getAll = async (req, res) => {
        await User.findAll({}).then((data) => {
            const users = data;
            res.send(users);
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