const { Router } = require("express")
const router = Router()
const { AuthController } = require('../controllers');

// Agrega las rutas para los usuarios
const Alergia_Route = require('./Alergia_Route');
const Caso_Covid_Route = require('./Caso_Covid_Route');
const Cirugia_Route = require('./Cirugia_Route');
const Consulta_Route = require('./Consulta_Route');
const Enf_Crenica_Route = require('./Enf_Crenica_Route');
const Especialidad_Route = require('./Especialidad_Route');
const Medicamento_Route = require('./Medicamento_Route');
const Medico_Route = require('./Medico_Route');
const Medico_Servicio_Route = require('./Medico_Servicio_Route');
const Paciente_Alergia_Route = require('./Paciente_Alergia_Route');
const Paciente_Cirugia_Route = require('./Paciente_Cirugia_Route');
const Paciente_Enf_Cronica_Route = require('./Paciente_Enf_Cronica_Route');
const Paciente_Route = require('./Paciente_Route');
const Receta_Medicamento_Route = require('./Receta_Medicamento_Route');
const Receta_Route = require('./Receta_Route')
const Servicio_Route = require('./Servicio_Route');
const userRouter = require('./User_Route')


router.get('/', (req, res) => {
    res.send("Actualizado")
});

// Login
router.post('/login', AuthController.logIn);
router.post('/signup', AuthController.signUp);

// Rutas para CRUDS de tablas
// Con AuthController.verifyToken Se protegen todas las rutas pertenecientes al usuario

router.use('/alergia',AuthController.verifyToken,  Alergia_Route);
router.use('/caso_covid',AuthController.verifyToken,  Caso_Covid_Route);
router.use('/cirugia',AuthController.verifyToken,  Cirugia_Route);
router.use('/consulta',AuthController.verifyToken,  Consulta_Route);
router.use('/enf_cronica',AuthController.verifyToken,  Enf_Crenica_Route);
router.use('/especialidad',AuthController.verifyToken,  Especialidad_Route);
router.use('/medicamento',AuthController.verifyToken,  Medicamento_Route);
router.use('/medico',AuthController.verifyToken,  Medico_Route);
router.use('/medico_servicio',AuthController.verifyToken,  Medico_Servicio_Route);
router.use('/paciente_alergia',AuthController.verifyToken,  Paciente_Alergia_Route);
router.use('/paciente_cirugia',AuthController.verifyToken,  Paciente_Cirugia_Route);
router.use('/paciente_enf_cronica',AuthController.verifyToken,  Paciente_Enf_Cronica_Route);
router.use('/paciente',AuthController.verifyToken,  Paciente_Route);
router.use('/receta_medicamento',AuthController.verifyToken, Receta_Medicamento_Route);
router.use('/receta',AuthController.verifyToken, Receta_Route);
router.use('/servicio',AuthController.verifyToken, Servicio_Route);
router.use('/user',AuthController.verifyToken, userRouter);
  
// Exporta el modulo de todas las rutas para ser usado por app.js
module.exports = router;