const { Router } = require("express")
const router = Router()

const { Medicamento_Controller } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  Medicamento_Controller.getAll);
router.get('/:id', Medicamento_Controller.getById);
router.post('/', Medicamento_Controller.add);
router.put('/', Medicamento_Controller.update);
router.delete('/', Medicamento_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;