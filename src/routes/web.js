const { Router } = require("express")
const router = Router()
const { AuthController } = require('../controllers');

// Agrega las rutas para los usuarios
const userRouter = require('./UserRoute')


router.get('/', AuthController.verifyToken,  (req, res) => {
    res.send("Hola")
});


router.post('/login', AuthController.logIn);
router.post('/signin', AuthController.signIn);


// Define las rutas de usuario
router.use('/user', userRouter);


  
// Exporta el modulo de todas las rutas para ser usado por app.js
module.exports = router;