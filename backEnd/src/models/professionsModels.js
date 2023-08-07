const connection = require('../db/db');



function getProfessions() {
    
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `professions`', (err, rows, fields) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
    
    
}

module.exports = { getProfessions }