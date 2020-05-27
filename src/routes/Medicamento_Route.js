const { Router } = require("express")
const router = Router()

const { MedicamentosController } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  MedicamentosController.getAll);
router.get('/:id', MedicamentosController.getById);
router.post('/', MedicamentosController.add);
router.put('/', MedicamentosController.update);
router.delete('/', MedicamentosController.delete);

// Exporta el modulo de rutas
module.exports = router;