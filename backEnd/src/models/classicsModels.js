const connection = require('../db/db');
const helpers = require('../helpers/helper');

function getData() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `azclassics` ', (err, rows, fields) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}
function getNation(id){
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM azclassics INNER JOIN nation ON "+`azclassics.nation = ${id} WHERE nation.nationid = ${id}`, (err,rows, fields) => {
            if(err) reject(err);
            resolve(rows);
        });
    });
} 
/*
    SELECT *
   FROM authors.azclassics
   INNER JOIN login.shoppingcart
   ON authors.azclassics.itemid = login.shoppingcart.cartitemid
   INNER JOIN login.users
   ON login.shoppingcart.cartuserid = 2 AND login.users.userid = 2;

  SELECT authors.azclassics.fullname, login.shoppingcart.wishlist FROM authors.azclassics LEFT JOIN login.shoppingcart ON authors.azclassics.itemid = login.shoppingcart.cartitemid WHERE authors.azclassics.genre = 1 AND login.shoppingcart.cartuserid = 2;

*/

/*

    Admin panel 
    //
    
    Filter bolmesi

    table city,
    table metro
    table price


    {
        cities: {
            data: []
        },
        metros: {
            data: []
        },
        price: {
            data: []
        }
    }

*/

function getGenre(id,userid){ 
    //console.log(userid)
    //console.log(id)
    if(userid === undefined){
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM azclassics INNER JOIN professions ON "+`azclassics.genre = ${id} WHERE professions.professionid = ${id}`, (err,rows, fields) => {
                if(err) reject(err);
                resolve(rows); // []
                //console.log(rows)
            });
        });
    }else{
        return new Promise((resolve, reject) => {
            connection.query(`SELECT authors.azclassics.fullname, authors.azclassics.born, 
            authors.azclassics.piece,authors.azclassics.description,
            authors.azclassics.url,authors.azclassics.genre, 
            authors.azclassics.nation, authors.azclassics.itemid ,authors.shoppingcart.wishlist 
            FROM authors.azclassics LEFT JOIN authors.shoppingcart 
            ON authors.azclassics.itemid = authors.shoppingcart.cartitemid AND authors.shoppingcart.cartuserid = ${userid} 
            WHERE authors.azclassics.genre = ${id}; `, (err,rows, fields) => {
                if(err) reject(err);
                resolve(rows);
                //console.log(rows)
            });
        });
    }
    
} 
function getItem(id,userid){
    //console.log(id, userid)
    if(userid === undefined){
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM azclassics WHERE" + ` itemid = '${id}'`, (err,rows, fields) => {
                if(err) reject(err);
                resolve(rows);
            });
        });
    }
    else{
        return new Promise((resolve, reject) => {
            connection.query(`SELECT authors.azclassics.fullname, authors.azclassics.born, 
            authors.azclassics.piece,authors.azclassics.description,
            authors.azclassics.url,authors.azclassics.genre, 
            authors.azclassics.nation, authors.azclassics.itemid ,authors.shoppingcart.wishlist 
            FROM authors.azclassics LEFT JOIN
            authors.shoppingcart ON authors.shoppingcart.cartuserid = ${userid} WHERE authors.azclassics.itemid = ${id}`, (err,rows, fields) => {
                if(err) reject(err);
                resolve(rows);
            });
        });
    }
}
function searchItem(recivedSearchInput){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `azclassics` WHERE fullname ' + `LIKE '%${recivedSearchInput}%'`, (err, rows, fields) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
    
}
function blogItems(){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `blogs` ', (err, rows, fields) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}
function getblogItem(id){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM `blogs` WHERE' + ` id = ${id}`, (err, rows, fields) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}
function getUsers(){
    return new Promise((resolve, reject) => {
        connection.query('SELECT userName, email, location, phone, userid  FROM `users` ', (err, rows, fields) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}
function changeItem(fullname, piece, born, id, type){
    if(type === 'item'){
        return new Promise((resolve, reject) => {
            connection.query("UPDATE azclassics SET"+" "+`fullname = '${fullname}', piece='${piece}', born='${born}' WHERE itemid='${id}'`, (err,rows, fields) => {
                if(err) reject(err);
                resolve(rows);
                //console.log(rows)
            });
        });
    }else if(type === 'blogs'){
        return new Promise((resolve, reject) => {
            connection.query("UPDATE blogs SET"+" "+`fullname = '${fullname}', popularpiece='${piece}', born='${born}' WHERE id='${id}'`, (err,rows, fields) => {
                if(err) reject(err);
                resolve(rows);
                //console.log(rows)
            });
        });
    }
}
function deleteItem(id){
    return new Promise((resolve, reject) => {
        
        connection.query("DELETE `azclassics`, `shoppingcart` FROM azclassics LEFT JOIN shoppingcart ON azclassics.itemid = shoppingcart.cartitemid WHERE" + ` azclassics.itemid = ${id}`, (err,rows,fields) =>{
            if(err) reject(err)
            resolve()
        })
    })
}
// DELETE `users`, `shoppingcart` FROM users LEFT JOIN shoppingcart ON users.userid = shoppingcart.cartuserid WHERE users.userid = 4;
function deleteUser(id){
    return new Promise((resolve, reject) => {
        connection.query("DELETE `users`, `shoppingcart` FROM users LEFT JOIN shoppingcart ON users.userid = shoppingcart.cartuserid WHERE" + ` users.userid = ${id}`, (err,rows,fields) =>{
            if(err) reject(err)
            resolve(helpers.userDeleted())
        })
    })
}
function deleteBlog(id){
    return new Promise((resolve, reject) => {
        connection.query("DELETE from `blogs` WHERE" + ` id=${id}`, (err,rows,fields) =>{
            if(err) reject(err)
            resolve(helpers.userDeleted())
        })
    })
}
async function addItem(author, piece, born, nation, genre, url, description, type){ 
    if(type === 'item'){
        let nationid = await helpers.isNationExisted(nation);
        let genreid = await helpers.isGenreExisted(genre);
        let newdescription = await helpers.editText(description)

        console.log(nationid, genreid, newdescription)
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO `azclassics` (`fullname`, `piece`, `born`, `nation`, `genre`, `url`, `description`) VALUES "+`('${author}','${piece}','${born}','${nationid}','${genreid}','${url}','${newdescription}')`,(err,rows,fields) =>{
                if(err) reject(err)
                resolve(rows)
            })
        })
        
    }else if(type === "blogs"){
        
        let nationid = await helpers.isNationExisted(nation);
        let genreid = await helpers.isGenreExisted(genre);
        let newdescription = await helpers.editText(description)
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO `blogs` (`fullname`, `popularpiece`, `born`, `nation`, `genre`, `url`, `description`) VALUES "+`('${author}','${piece}','${born}','${nationid}','${genreid}','${url}','${newdescription}')`,(err,rows,fields) =>{
                if(err) reject(err)
                resolve(rows)
            })
        })
    }
}

module.exports = {
    getData, 
    getNation,
    getGenre, 
    getItem, 
    searchItem, 
    blogItems, 
    getblogItem, 
    getUsers, 
    changeItem, 
    deleteItem, 
    deleteUser, 
    deleteBlog, 
    addItem
}


  