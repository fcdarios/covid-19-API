const { Router } = require("express")
const router = Router()

const { Paciente_Controller } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  Paciente_Controller.getAll);
router.post('/', Paciente_Controller.add);
router.put('/', Paciente_Controller.update);
router.delete('/', Paciente_Controller.delete);
router.get('/info/:id', Paciente_Controller.getByUserId)

router.get('/perfil', Paciente_Controller.getPerfil);
router.get('/consultas/:id', Paciente_Controller.getConsultas);

// Exporta el modulo de rutas
module.exports = router;