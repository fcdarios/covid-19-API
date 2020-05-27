const { Router } = require("express")
const router = Router()

const { Servicio_Controller } = require('../controllers');

// Rutas para el CRUD de los Servicios

//Al hacer las peticiones a la ruta '/servicio' redirreciona al controlador de Servicios
router.get('/',  Servicio_Controller.getAll);
router.get('/:id', Servicio_Controller.getById);
router.post('/', Servicio_Controller.add);
router.put('/', Servicio_Controller.update);
router.delete('/', Servicio_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;