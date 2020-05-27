const { Router } = require("express")
const router = Router()

const { MedicosController } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  MedicosController.getAll);
router.get('/:id', MedicosController.getById);
router.post('/', MedicosController.add);
router.put('/', MedicosController.update);
router.delete('/', MedicosController.delete);

// Exporta el modulo de rutas
module.exports = router;