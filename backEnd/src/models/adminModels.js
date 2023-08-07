const connection = require('../db/db');


function getAdmin(adminname, adminpassword){
    return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM admin WHERE name = "${adminname}" AND password = "${adminpassword}"`, (err,rows, fields) => {
            if(err) reject(err);
            resolve(rows);
        });
    });
}

module.exports = { getAdmin }


