const { Router } = require("express")
const router = Router()

const { Paciente_Enf_Cronica_Controller } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  Paciente_Enf_Cronica_Controller.getAll);
router.get('/:id', Paciente_Enf_Cronica_Controller.getById);
router.post('/', Paciente_Enf_Cronica_Controller.add);
router.put('/', Paciente_Enf_Cronica_Controller.update);
router.delete('/', Paciente_Enf_Cronica_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;