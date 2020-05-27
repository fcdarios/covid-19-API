const {Medicamento_Model} = require('../models/Medicamento_Model');


// --------- Controlador para usuarios ---------
class MedicamentosController {

    // Recibe las peticiones y regresa una respuesta en formato json
    getAll = async (req, res) => {
        await Medicamento_Model.findAll({}).then((data) => {
            const Medicamentos = data;
            res.send(Medicamentos);
        }).catch((err) => {
            console.log(err);
        });
    };

    getById = async(req, res) => {
        const id = parseInt(req.params.id);
        const Med = await Medicamento_Model.findAll({
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
        const Med = req.body;
        Medicamento_Model.create(Med).then((value) => {
            value.respuesta = "Medicamento Agregado"
            res.send(value);
        });
    };

    update = async(req, res) => {
        const Med = req.body;
        await Medicamento_Model.update(Med, {
            where: {
                id: Med.id
            }
        }).then((data) => {
            const response = Med
            response.message = 'UPDATE'
            res.send(response);
        });
    };


    delete = async(req, res) => {
        const Med = req.body;
        const Medic = await Medicamento_Model.destroy({
            where: {
                id: Med.id
            }
        }).then((data) => {
            Med.response = "Medicamento eliminado"
            res.send(Med);
        });
    };
}


module.exports = new MedicamentosController();