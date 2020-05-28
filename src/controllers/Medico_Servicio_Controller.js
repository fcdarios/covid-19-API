const  Medico_Servicio_Model  = require('../models/Medico_Servicio_Model');

// --------- Controlador para usuarios ---------
class MedicoServicioController {

    // Recibe las peticiones y regresa una respuesta en formato json
    getAll = async (req, res) => {
        await Medico_Servicio_Model.findAll({}).then((data) => {
            const MedicoServicio = data;
            res.send(MedicoServicio);
        }).catch((err) => {
            console.log(err);
        });
    };

    getById = async(req, res) => {
        const id = parseInt(req.params.id);
        const Med = await Medico_Servicio_Model.findAll({
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
        Medico_Servicio_Model.create(Med).then((value) => {
            value.respuesta = "Servicio medico Agregado"
            res.send(value);
        });
    };

    update = async(req, res) => {
        const Med = req.body;
        await Medico_Servicio_Model.update(Med, {
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
        const Medic = await Medico_Servicio_Model.destroy({
            where: {
                id: Med.id
            }
        }).then((data) => {
            Med.response = "Servicio medico eliminado"
            res.send(Med);
        });
    };
}


module.exports = new MedicoServicioController();