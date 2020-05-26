const { Router } = require("express")
const router = Router()
const { AuthController } = require('../controllers');

// Agrega las rutas para los usuarios
const userRouter = require('./User_Route')
const Especialidad_Route = require('./Especialidad_Route')
const Receta_Route = require('./Receta_Route')
const Receta_Medicamento_Route = require('./Receta_Medicamento_Route')
const Servicio_Route = require('./Servicio_Route')

router.get('/', (req, res) => {
    res.send("Hola")
});

// Login
router.post('/login', AuthController.logIn);
router.post('/signin', AuthController.signIn);


// Define las rutas de usuario
// Con AuthController.verifyToken Se protegen todas las rutas pertenecientes al usuario
router.use('/user', userRouter);

router.use('/especialidad',AuthController.verifyToken, Especialidad_Route);
router.use('/receta',AuthController.verifyToken, Receta_Route);
router.use('/receta_medicamento',AuthController.verifyToken, Receta_Medicamento_Route);
router.use('/servicio',AuthController.verifyToken, Servicio_Route);

  
// Exporta el modulo de todas las rutas para ser usado por app.js
module.exports = router;