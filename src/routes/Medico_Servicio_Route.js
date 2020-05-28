const { Router } = require("express")
const router = Router()

const { Medico_Servicio_Controller } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  Medico_Servicio_Controller.getAll);
router.get('/:id', Medico_Servicio_Controller.getById);
router.post('/', Medico_Servicio_Controller.add);
router.put('/', Medico_Servicio_Controller.update);
router.delete('/', Medico_Servicio_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;