const { Router } = require("express")
const router = Router()

const { Consulta_Controller } = require('../controllers');

// Rutas para el CRUD de los Servicios

//Al hacer las peticiones a la ruta '/servicio' redirreciona al controlador de Servicios
router.get('/',  Consulta_Controller.getAll);
router.get('/:id', Consulta_Controller.getById);
router.post('/', Consulta_Controller.add);
router.put('/', Consulta_Controller.update);
router.delete('/', Consulta_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;