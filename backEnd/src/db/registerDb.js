const mysql = require('mysql');
const configs = require('../configs/configs');

const connectionRegister = mysql.createConnection(configs.login);

connectionRegister.connect();

module.exports = connectionRegister;