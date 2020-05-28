const  Paciente_Alergia_Model  = require('../models/Medicamento_Model');


// --------- Controlador para usuarios ---------
class PacienteAlergiaController {

    // Recibe las peticiones y regresa una respuesta en formato json
    getAll = async (req, res) => {
        await Paciente_Alergia_Model.findAll({}).then((data) => {
            const PacienteAlergia = data;
            res.send(PacienteAlergia);
        }).catch((err) => {
            console.log(err);
        });
    };

    getById = async(req, res) => {
        const id = parseInt(req.params.id);
        const PacienteAlergia = await Paciente_Alergia_Model.findAll({
            where: {
                id: id
            }
        }).then(async (data) =>  {
            return res.send(data);
        }).catch((err) => {
            console.log(err);
        });
    };

    add = (req, res) => {
        const PacienteAlergia = req.body;
        Paciente_Alergia_Model.create(PacienteAlergia).then((value) => {
            value.respuesta = "Alergia del paciente Agregado"
            res.send(value);
        });
    };

    update = async(req, res) => {
        const PacienteAlergia = req.body;
        await Paciente_Alergia_Model.update(PacienteAlergia, {
            where: {
                id: PacienteAlergia.id
            }
        }).then((data) => {
            const response = PacienteAlergia
            response.message = 'UPDATE'
            res.send(response);
        });
    };


    delete = async(req, res) => {
        const PacAlergia = req.body;
        const PacienteAlergia = await Paciente_Alergia_Model.destroy({
            where: {
                id: PacAlergia.id
            }
        }).then((data) => {
            PacAlergia.response = "Alergia del paciente eliminado"
            res.send(PacAlergia);
        });
    };
}


module.exports = new PacienteAlergiaController();