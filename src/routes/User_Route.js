const { Router } = require("express")
const router = Router()

const { UserController } = require('../controllers');

// Rutas para el CRUD de los usuarios

//Al hacer las peticiones a la ruta '/user' redirreciona al controlador de usuarios
router.get('/',  UserController.getAll);
//router.get('/:id', UserController.getById);
router.post('/', UserController.add);
router.put('/', UserController.update);
router.delete('/', UserController.delete);

router.get('/perfil', UserController.getPerfil);

// Exporta el modulo de rutas
module.exports = router;