const connection = require('../db/db');



function getData() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `azclassics` ', (err, rows, fields) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}


module.exports = {getData}