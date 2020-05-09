const User = require('../models/User');
// --------- Controlador para usuarios ---------
class UserController {

    // Recibe las peticiones y regresa una respuesta en formato json
    getAll = async(req, res) => {
        const users = User.findAll({}).then((data) => {
            res.send(data);
        }).catch((err) => {
            console.log(err);
        });
    };

    getById = async(req, res) => {
        const id = parseInt(req.params.id);
        const users = User.findAll({
            where: {
                id: id
            }
        }).then((data) => {
            res.send(data);
        }).catch((err) => {
            console.log(err);
        });
    };

    add = async(req, res) => {
        const person = req.body;
        const user = await User.create(person).then((value) => {
            value.response = "Usuario Agregado"
            res.send(value);
        });
    };

    update = async(req, res) => {
        const person = req.body;
        const user = await User.update(person, {
            where: {
                id: person.id
            }
        }).then((data) => {
            person.response = "Usuario actualizado con exito"
            res.send(person);
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