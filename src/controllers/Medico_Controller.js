const Medico_Model = require('../models/Medico_Model');

// --------- Controlador para usuarios ---------
class MedicosController {

    // Recibe las peticiones y regresa una respuesta en formato json
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

    add = (req, res) => {
        const Medic = req.body;
        Medico_Model.create(Med).then((value) => {
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