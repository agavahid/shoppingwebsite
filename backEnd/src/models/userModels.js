const connection = require('../db/db');



function controlAccount() {
    
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM `users` ", (err,rows, fields) => {
            if(err) reject(err);
            resolve(rows);
        }) 
    })
}


module.exports = { controlAccount }