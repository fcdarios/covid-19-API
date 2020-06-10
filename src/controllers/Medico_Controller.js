const Medico_Model = require('../models/Medico_Model');
const Especialidad = require('../models/Especialidad_Model');
const Paciente = require('../models/Paciente_Model');
const {User} = require('../models/UserModel');
const Consulta = require('../models/Consulta_Model');

// --------- Controlador para usuarios ---------
class MedicosController {

    // Recibe las peticiones y regresa una respuesta en formato json.


    getConsultas = async(req, res) => {
        let consultas = [];
        const id_especialidad = parseInt(req.params.id_especialidad);

        await Consulta.findAll({
            where: {
                id_especialidad: id_especialidad
            }
        }).then(async (data) =>  {
            consultas = await this.getDatosConsultas(req, res, data);
            return res.send(consultas);
        }).catch((err) => {
            console.log(err);
        });
    };

    

    async getDatosConsultas (req, res, data) {
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

            await Paciente.findAll({
                where: {
                    id: c.id_paciente
                }
            }).then(async (data) =>  {
               consultas[index].paciente = data[0];
            }).catch((err) => {
                console.log(err);
            });

            await User.findAll({
                where: {
                    id: consultas[index].paciente.id_user
                },
                attributes: ['id', 'username', 'name', 'email']
            }).then(async (data) =>  {
               consultas[index].usuario = data[0];

            }).catch((err) => {
                console.log(err);
            });

            

        }

        return consultas;
    }






    Login = async (req, res) => {
        const { email, password } =req.body;
        await User.findAll({
            where: {
                email: email,
                password: password
            }
        }).then(async (data) =>  {
            const Medico = data[0].dataValues;
            Medico.password = await encryptPassword(Medico.password)
            return res.send(data);
        }).catch((err) => {
            console.log(err);
        });
    };

    getAll = async (req, res) => {
        await Medico_Model.findAll({}).then((data) => {
            const Medi = data;
            res.send(Medi);
        }).catch((err) => {
            console.log(err);
        });
    };

    getById = async(req, res) => {
        const id = parseInt(req.params.id);
        const Medi = await Medico_Model.findAll({
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
        const Medi = await Medico_Model.findAll({
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
        const Medic = req.body;
        Medico_Model.create(Medic).then((value) => {
            value.respuesta = "Medico Agregado"
            res.send(value);
        });
    };

    update = async(req, res) => {
        const Medic = req.body;
        await Medico_Model.update(Medic, {
            where: {
                id: Medic.id
            }
        }).then((data) => {
            const response = Med
            response.message = 'UPDATE'
            res.send(response);
        });
    };


    delete = async(req, res) => {
        const Medic = req.body;
        const Medico = await Medico_Model.destroy({
            where: {
                id: Medic.id
            }
        }).then((data) => {
            Med.response = "Medico eliminado"
            res.send(Med);
        });
    };
}


module.exports = new MedicosController();