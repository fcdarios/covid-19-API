const { Router } = require("express")
const router = Router()

const { PacienteController } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  PacienteController.getAll);
router.get('/:id', PacienteController.getById);
router.post('/', PacienteController.add);
router.put('/', PacienteController.update);
router.delete('/', PacienteController.delete);

// Exporta el modulo de rutas
module.exports = router;