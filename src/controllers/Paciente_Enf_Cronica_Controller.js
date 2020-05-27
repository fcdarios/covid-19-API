const {Paciente_Enf_Cronica_Model} = require('../models/Paciente_Enf_Cronica_Model');


// --------- Controlador para usuarios ---------
class PacienteEnfCronicaController {

    // Recibe las peticiones y regresa una respuesta en formato json
    getAll = async (req, res) => {
        await Paciente_Enf_Cronica_Model.findAll({}).then((data) => {
            const Paciente_Enf = data;
            res.send(Paciente_Enf);
        }).catch((err) => {
            console.log(err);
        });
    };

    getById = async(req, res) => {
        const id = parseInt(req.params.id);
        const Paciente_Enf = await Paciente_Enf_Cronica_Model.findAll({
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
        const Paciente_Enf = req.body;
        Paciente_Enf_Cronica_Model.create(Paciente_Enf).then((value) => {
            value.respuesta = "Enfermedad cronica del paciente Agregado"
            res.send(value);
        });
    };

    update = async(req, res) => {
        const Paciente_Enf = req.body;
        await Paciente_Enf_Cronica_Model.update(Paciente_Enf, {
            where: {
                id: Paciente_Enf.id
            }
        }).then((data) => {
            const response = Paciente_Enf
            response.message = 'UPDATE'
            res.send(response);
        });
    };


    delete = async(req, res) => {
        const Paciente_Enf = req.body;
        const PacEnf = await Paciente_Enf_Cronica_Model.destroy({
            where: {
                id: Paciente_Enf.id
            }
        }).then((data) => {
            Paciente_Enf.response = "Enfermedad cronica del paciente eliminado"
            res.send(Paciente_Enf);
        });
    };
}


module.exports = new PacienteEnfCronicaController();