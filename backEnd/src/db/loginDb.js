const mysql = require('mysql');
const configs = require('../configs/configs');

const connectionLogin = mysql.createConnection(configs.login);

connectionLogin.connect();

module.exports = connectionLogin;