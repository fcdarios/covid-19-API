const Paciente_Model = require('../models/Paciente_Model');
const { response } = require('express');


// --------- Controlador para usuarios ---------
class PacienteController {


    getPerfil = async(req, res) => {
        const id = res.id_user;
        let code = 0;
        let message = ''

        await Paciente_Model.findAll({
            where: {
                id_user: id
            }
        }).then(async (data) =>  {
            const paciente = data[0].dataValues;
           
            delete paciente.id;
            delete paciente.id_user;

            code = 0;
            message = 'Usuario y token validos';  
            paciente.code = code;
            paciente.message = message;
            return res.status(200).send(paciente);
        }).catch((err) => {
            code = 0;
            message = 'Usuario y token validos';  
            response.code = code;
            response.message = message;

            return res.status(400).send(response);
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
        const paciente = req.body;
        const id = res.id_user;
        paciente.nacimiento = JSON.stringify(paciente.nacimiento)
    
        console.log(paciente)

        await Paciente_Model.update(paciente, {
            where: {
                id_user: id
            }
        }).then((data) => {
            const response = data
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