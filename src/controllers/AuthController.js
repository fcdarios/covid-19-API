const {User, encryptPassword, login} = require('../models/UserModel');

const jwt = require('jsonwebtoken');


// --------- Controlador para usuarios ---------
class AuthController {

    
    logIn = async(req, res) => {
        const data = req.body;
        await login(data, res);

        const user = res.user

        return res.json(user)
    };

    signIn = async(req, res) => {
        const data = req.body;
        
        return res.json(data)
    };

    verifyToken = (req, res, next) => {
        const token = req.headers['access-token'];

        if (!token) {
            return res.status(401).json({
                auth: false,
                message : "No Token provided"
            });
        }
        jwt.verify(token, process.env.DB_NAME, (err, data) => {
            if (err)  return res.sendStatus(403);
            else {
                req.id_user = data
                next();
            }
        });

        
        
    };

}


module.exports = new AuthController();