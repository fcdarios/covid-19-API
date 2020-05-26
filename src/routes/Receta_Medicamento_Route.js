const { Router } = require("express")
const router = Router()

const { Receta_Medicamento_Controller } = require('../controllers');

// Rutas para el CRUD de las Recetas

//Al hacer las peticiones a la ruta '/receta_mediccamentos' redirreciona al controlador de Recetas
router.get('/r_m/',  Receta_Medicamento_Controller.getAll);
router.get('/r_m/:id', Receta_Medicamento_Controller.getById);
router.post('/r_m/', Receta_Medicamento_Controller.add);
router.put('/r_m/', Receta_Medicamento_Controller.update);
router.delete('/r_m/', Receta_Medicamento_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;