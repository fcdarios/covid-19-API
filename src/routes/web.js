const { Router } = require("express")
const router = Router()

// Agrega las rutas para los usuarios
const userRouter = require('./users')

router.get('/',  (req, res) => {
    res.send("Hola")
});

// Usa las rutas
router.use('/user', userRouter);


  
// Exporta el modulo de todas las rutas para ser usado por app.js
module.exports = router;