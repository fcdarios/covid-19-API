const { Router } = require("express")
const router = Router()

const { Especialidad_Controller } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/especialidad' redirreciona al controlador de usuarios
router.get('/',  Especialidad_Controller.getAll);
router.get('/:id', Especialidad_Controller.getById);
router.post('/', Especialidad_Controller.add);
router.put('/', Especialidad_Controller.update);
router.delete('/', Especialidad_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;