const { Router } = require("express")
const router = Router()

const { Receta_Controller } = require('../controllers');

// Rutas para el CRUD de las Recetas

//Al hacer las peticiones a la ruta '/receta' redirreciona al controlador de Recetas
router.get('/receta/',  Receta_Controller.getAll);
router.get('/receta/:id', Receta_Controller.getById);
router.post('/receta/', Receta_Controller.add);
router.put('/receta/', Receta_Controller.update);
router.delete('/receta/', Receta_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;