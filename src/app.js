require('dotenv').config();
// --------- SERVIDOR ---------

const express = require("express");
const morgan = require('morgan');
const router = require('./routes/web');
const app = express()
const cors = require('cors')

// Settings
app.set('appName', 'Proyecto Covid-19');
app.set('host', 'localhost');
app.set('port', 3001);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({cors:{Server:{origin: "localhost:3000"}}}));

// Routes
app.use(router);

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server on port:',app.get('port'));
});