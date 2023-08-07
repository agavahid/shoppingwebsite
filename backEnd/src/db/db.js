const mysql = require('mysql'); 
const configs = require('../configs/configs');

const connection = mysql.createConnection(configs.db);

connection.connect();

module.exports = connection;