const { Router } = require("express")
const router = Router()

const { Paciente_Cirugia_Controller } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  Paciente_Cirugia_Controller.getAll);
router.get('/:id', Paciente_Cirugia_Controller.getById);
router.post('/', Paciente_Cirugia_Controller.add);
router.put('/', Paciente_Cirugia_Controller.update);
router.delete('/', Paciente_Cirugia_Controller.delete);

// Exporta el modulo de rutas
module.exports = router;