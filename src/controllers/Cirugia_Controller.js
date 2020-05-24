const CirugiaModel = require('../models/Cirugia_Model');

// --------- Controlador para Cirugias ---------
// Recibe las peticiones y regresa una respuesta en formato json

class Cirugia_Controller {

    // Consulta select de todos los valores de la tabla
    getAll = async (req, res) => {
        await CirugiaModel.findAll({}).then((data) => {

            // Regresa los valores en JSON
            res.json(data);

        }).catch((err) => {
            console.log(err);
        });
    };

    // Consulta select por id
    getById = async(req, res) => {
        const id = parseInt(req.params.id);
        await CirugiaModel.findAll({
            where: {
                id: id
            }
        }).then(async (data) =>  {
            //  -------

            return res.json(data);

            //  -------
        }).catch((err) => {
            console.log(err);
        });
    };

    // POST agrega una registro nuevo
    add = async(req, res) => {
        const datos = req.body;


        await CirugiaModel.create(datos).then((value) => {
            value.respuesta = "Registro Agregado"
            res.json(value);
        });
    };

    // PUT Actualiza un valor
    update = async(req, res) => {
        const datos = req.body;

        await CirugiaModel.update(datos, {
            where: {
                id: datos.id
            }
        }).then((data) => {
            const response = datos
            response.message = 'UPDATE'
            res.json(response);
        });
    };


    delete = async(req, res) => {
        const datos = req.body;
        await CirugiaModel.destroy({
            where: {
                id: datos.id
            }
        }).then((data) => {
            datos.response = "Registro eliminado con exito"
            res.json(datos);
        });
    };
}

module.exports = new Cirugia_Controller();