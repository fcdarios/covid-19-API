const { Router } = require("express")
const router = Router()

const { Enf_Cronica_Controller } = require('../controllers');

// Rutas para el CRUD de los Servicios

//Al hacer las peticiones a la ruta '/servicio' redirreciona al controlador de Servicios
router.get('/',  Enf_Cronica_Controller.getAll);
router.get('/:id', Enf_Cronica_Controller.getById);
router.post('/', Enf_Cronica_Controller.add);
router.put('/', Enf_Cronica_Controller.update);
router.delete('/', Enf_Cronica_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;