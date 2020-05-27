const { Router } = require("express")
const router = Router()

const { Cirugia_Controller } = require('../controllers');

// Rutas para el CRUD de los Servicios

//Al hacer las peticiones a la ruta '/servicio' redirreciona al controlador de Servicios
router.get('/',  Cirugia_Controller.getAll);
router.get('/:id', Cirugia_Controller.getById);
router.post('/', Cirugia_Controller.add);
router.put('/', Cirugia_Controller.update);
router.delete('/', Cirugia_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;