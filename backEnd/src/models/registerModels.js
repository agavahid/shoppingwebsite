const connectionRegister = require('../db/db');
const helpers = require('../helpers/helper');

function createAccount(username, password, email, location, phone) {
    
    return new Promise((resolve, reject) => {
        connectionRegister.query(" INSERT INTO `users` (userName, password, email, location, phone)"+` VALUES('${username}', '${password}', '${email}', '${location}', '${phone}')`, (err,rows, fields) => {
            if(err) reject(err);
            else{
               console.log(rows);
            }
            resolve(helpers.registerCompleted());
        }) 
    })
}


module.exports = { createAccount }