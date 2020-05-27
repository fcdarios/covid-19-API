const { Router } = require("express")
const router = Router()

const { MedicoServicioController } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  MedicoServicioController.getAll);
router.get('/:id', MedicoServicioController.getById);
router.post('/', MedicoServicioController.add);
router.put('/', MedicoServicioController.update);
router.delete('/', MedicoServicioController.delete);

// Exporta el modulo de rutas
module.exports = router;