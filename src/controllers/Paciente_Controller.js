const Paciente_Model = require('../models/Paciente_Model');


// --------- Controlador para usuarios ---------
class PacienteController {

    // Recibe las peticiones y regresa una respuesta en formato json
    getAll = async (req, res) => {
        await Paciente_Model.findAll({}).then((data) => {
            const Paciente = data;
            res.send(Paciente);
        }).catch((err) => {
            console.log(err);
        });
    };

    getById = async(req, res) => {
        const id = parseInt(req.params.id);
        const Paciente = await Paciente_Model.findAll({
            where: {
                id: id
            }
        }).then(async (data) =>  {
            return res.send(data);
        }).catch((err) => {
            console.log(err);
        });
    };

    getByUserId = async(req, res) => {
        const id = parseInt(req.params.id);
        const Paciente = await Paciente_Model.findAll({
            where: {
                id_user: id
            }
        }).then(async (data) =>  {
            return res.send(data);
        }).catch((err) => {
            console.log(err);
        });
    };

    add = (req, res) => {
        const Paciente = req.body;
        Paciente_Model.create(Paciente).then((value) => {
            value.respuesta = "Paciente Agregado"
            res.send(value);
        });
    };

    update = async(req, res) => {
        const Paciente = req.body;
        await Paciente_Model.update(Paciente, {
            where: {
                id: Paciente.id
            }
        }).then((data) => {
            const response = Paciente
            response.message = 'UPDATE'
            res.send(response);
        });
    };


    delete = async(req, res) => {
        const Paciente = req.body;
        const Pac = await Paciente_Model.destroy({
            where: {
                id: Paciente.id
            }
        }).then((data) => {
            Paciente.response = "Paciente eliminado"
            res.send(Paciente);
        });
    };
}


module.exports = new PacienteController();