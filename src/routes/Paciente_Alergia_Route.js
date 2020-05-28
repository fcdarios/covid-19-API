const { Router } = require("express")
const router = Router()

const { Paciente_Alergia_Controller } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  Paciente_Alergia_Controller.getAll);
router.get('/:id', Paciente_Alergia_Controller.getById);
router.post('/', Paciente_Alergia_Controller.add);
router.put('/', Paciente_Alergia_Controller.update);
router.delete('/', Paciente_Alergia_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;