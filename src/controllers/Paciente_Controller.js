const Paciente_Model = require('../models/Paciente_Model');
const Medico = require('../models/Medico_Model');
const {User} = require('../models/UserModel');
const Especialidad = require('../models/Especialidad_Model');
const Consulta = require('../models/Consulta_Model');
const { response } = require('express');


// --------- Controlador para usuarios ---------
class PacienteController {

    getConsultas = async(req, res) => {
        const id = parseInt(req.params.id);
        let consultas = [];

        await Consulta.findAll({
            where: {
                id_paciente: id
            }
        }).then(async (data) =>  {
            consultas = await this.getDatosConsultas(data);

            return res.send(consultas);
        }).catch((err) => {
            console.log(err);
        });
    };


    async getDatosConsultas (data) {
        let consultas = []

        for (let index = 0; index < data.length; index++) {
            const d = data[index];
            consultas[index] = d.dataValues
        }
        
        for (let index = 0; index < consultas.length; index++) {
            const c = consultas[index];


            await Especialidad.findAll({
                where: {
                    id: c.id_especialidad
                }
            }).then(async (data) =>  {
                consultas[index].especialidad = data[0].especialidad;
                
             }).catch((err) => {
                 console.log(err);
             });

            await Medico.findAll({
                where: {
                    id: c.id_medico
                }
            }).then(async (data) =>  {
                if(data[0]){
                    consultas[index].medico = data[0];
                }else{
                    consultas[index].medico = null
                }
              
            }).catch((err) => {
                console.log(err);
            });

            if(consultas[index].medico){
                await User.findAll({
                    where: {
                        id: consultas[index].medico.id_user
                    },
                    attributes: ['id', 'username', 'name', 'email']
                }).then(async (data) =>  {
                consultas[index].usuario = data[0];

                }).catch((err) => {
                    console.log(err);
                });
            }else{
                consultas[index].usuario = null
            }
        }
        return consultas;
    }


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