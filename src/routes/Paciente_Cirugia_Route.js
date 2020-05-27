const { Router } = require("express")
const router = Router()

const { PacienteCirugiaController } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  PacienteCirugiaController.getAll);
router.get('/:id', PacienteCirugiaController.getById);
router.post('/', PacienteCirugiaController.add);
router.put('/', PacienteCirugiaController.update);
router.delete('/', PacienteCirugiaController.delete);

// Exporta el modulo de rutas
module.exports = router;