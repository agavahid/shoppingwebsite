const connection = require('../db/db');
const helpers = require('../helpers/helper');

/*
    SELECT *
        FROM authors.azclassics
        INNER JOIN login.shoppingcart
        ON authors.azclassics.itemid = login.shoppingcart.cartitemid
        INNER JOIN login.users
        ON login.shoppingcart.cartuserid = login.users.userid;


*/
function getAccount(email){
    
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM `users` WHERE"+` email = '${email}' `, (err,rows, fields) => {
            if(err) reject(err); 
            resolve(rows);
        });
    });
}

function getChoosedCartItems(userid){
    //console.log('userid', userid)
    if(userid === undefined){
        return[]
    }else{
        return new Promise((resolve, reject) => {
            connection.query(`SELECT *
            FROM authors.azclassics
            INNER JOIN authors.shoppingcart
            ON authors.azclassics.itemid = authors.shoppingcart.cartitemid
            INNER JOIN authors.users
            ON authors.shoppingcart.cartuserid = ${userid} && authors.users.userid = ${userid};`, (err,rows, fields) => {
                if(err) reject(err); 
                resolve(rows);
            });
        });
    }
    
}

function deleteChoosedCartItems(userId, itemId){
    
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM `shoppingcart` WHERE" + ` cartuserid = ${userId} AND cartitemid = ${itemId}`, (err,rows, fields) => {
            if(err) reject(err); 
            resolve(helpers.itemDeleted());
        });
    });
}

function addChoosedCartItems(userId, itemId){
    
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO `shoppingcart`(`cartitemid`, `cartuserid`)" + ` VALUES ('${itemId}','${userId}')`, (err,rows, fields) => {
            if(err) reject(err); 
            resolve(helpers.itemAdded()); 
        });
    });
}

async function getCartItems(userid){
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM `shoppingcart` WHERE" + ` cartuserid = ${userid}`, (err,rows, fields) => {
            if(err) reject(err); 
            resolve(rows);
        });
    });    
}


module.exports = { getAccount, getChoosedCartItems, deleteChoosedCartItems, addChoosedCartItems, getCartItems }