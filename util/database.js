const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Nish@nt9' , {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;