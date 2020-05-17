const { Router } = require("express")
const router = Router()
const { UserController } = require('../controllers');

// Agrega las rutas para los usuarios
const userRouter = require('./UserRoute')

router.get('/',  (req, res) => {
    res.send("Hola")
});
router.post('/login', UserController.logIn);
// Usa las rutas
router.use('/user', userRouter);


  
// Exporta el modulo de todas las rutas para ser usado por app.js
module.exports = router;