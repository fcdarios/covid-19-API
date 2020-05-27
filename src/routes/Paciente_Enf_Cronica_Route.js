const { Router } = require("express")
const router = Router()

const { PacienteEnfCronicaController } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  PacienteEnfCronicaController.getAll);
router.get('/:id', PacienteEnfCronicaController.getById);
router.post('/', PacienteEnfCronicaController.add);
router.put('/', PacienteEnfCronicaController.update);
router.delete('/', PacienteEnfCronicaController.delete);

// Exporta el modulo de rutas
module.exports = router;