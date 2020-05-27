const { Router } = require("express")
const router = Router()

const { Alergia_Controller } = require('../controllers');

// Rutas para el CRUD de los Servicios

//Al hacer las peticiones a la ruta '/servicio' redirreciona al controlador de Servicios
router.get('/',  Alergia_Controller.getAll);
router.get('/:id', Alergia_Controller.getById);
router.post('/', Alergia_Controller.add);
router.put('/', Alergia_Controller.update);
router.delete('/', Alergia_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;