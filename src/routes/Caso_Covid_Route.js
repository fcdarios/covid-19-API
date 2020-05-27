const { Router } = require("express")
const router = Router()

const { Caso_Covid_Controller } = require('../controllers');

// Rutas para el CRUD de los Servicios

//Al hacer las peticiones a la ruta '/servicio' redirreciona al controlador de Servicios
router.get('/',  Caso_Covid_Controller.getAll);
router.get('/:id', Caso_Covid_Controller.getById);
router.post('/', Caso_Covid_Controller.add);
router.put('/', Caso_Covid_Controller.update);
router.delete('/', Caso_Covid_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;