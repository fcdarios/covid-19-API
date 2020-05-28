const { Router } = require("express")
const router = Router()

const { Medico_Controller } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  Medico_Controller.getAll);
router.get('/:id', Medico_Controller.getById);
router.post('/', Medico_Controller.add);
router.put('/', Medico_Controller.update);
router.delete('/', Medico_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;