const { Router } = require("express")
const router = Router()

const { PacienteAlergiaController } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  PacienteAlergiaController.getAll);
router.get('/:id', PacienteAlergiaController.getById);
router.post('/', PacienteAlergiaController.add);
router.put('/', PacienteAlergiaController.update);
router.delete('/', PacienteAlergiaController.delete);

// Exporta el modulo de rutas
module.exports = router;