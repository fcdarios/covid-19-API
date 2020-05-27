const {Paciente_Cirugia_Model} = require('../models/Paciente_Cirugia_Model');


// --------- Controlador para usuarios ---------
class PacienteCirugiaController {

    // Recibe las peticiones y regresa una respuesta en formato json
    getAll = async (req, res) => {
        await Paciente_Cirugia_Model.findAll({}).then((data) => {
            const PacienteCirugia = data;
            res.send(PacienteCirugia);
        }).catch((err) => {
            console.log(err);
        });
    };

    getById = async(req, res) => {
        const id = parseInt(req.params.id);
        const PacienteCirugia = await Paciente_Cirugia_Model.findAll({
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
        const PacienteCirugia = req.body;
        Paciente_Cirugia_Model.create(PacienteCirugia).then((value) => {
            value.respuesta = "Cirugia de paciente Agregado"
            res.send(value);
        });
    };

    update = async(req, res) => {
        const PacienteCirugia = req.body;
        await Paciente_Cirugia_Model.update(PacienteCirugia, {
            where: {
                id: PacienteCirugia.id
            }
        }).then((data) => {
            const response = PacienteCirugia
            response.message = 'UPDATE'
            res.send(response);
        });
    };


    delete = async(req, res) => {
        const PacienteCirugia = req.body;
        const Medic = await Paciente_Cirugia_Model.destroy({
            where: {
                id: PacienteCirugia.id
            }
        }).then((data) => {
            PacienteCirugia.response = "Medicamento eliminado"
            res.send(PacienteCirugia);
        });
    };
}


module.exports = new PacienteCirugiaController();