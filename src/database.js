const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect:'postgres',
    logging: false
});

sequelize.authenticate().then(() => {
    console.log("Success!");
}).catch((err) => {
    console.log(err);
});

module.exports = sequelize;

