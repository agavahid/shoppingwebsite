const bcrypt = require('bcrypt');
const configs = require('../configs/configs');
const jwt = require("jsonwebtoken");
const jwt_decode = require('jwt-decode');
const connection = require('../db/db');
const helperItems = require('../../helperItems')

function getOffset(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage];
}
  
function emptyOrRows(rows) {
    if (!rows) {
      return [];
    }
    return rows;
}

function handleErrors() { 
    return {
        status: 401,
        message: 'E-mail or Password is false'
    }
}
function userExisted(){
    return {
        status: 400,
        message: 'Email is Already Used'
    }
}
function itemDeleted(){
    return {
        status: 200,
        message: 'Item is Succesfully Deleted'
    }
}
function userDeleted(){
    return {
        status: 200,
        message: 'User is Succesfully Deleted'
    }
}
function itemAdded(){
    return {
        status: 200,
        message: 'Item is Succesfully Added'
    }
}
function registerCompleted(){
    return{
        status: 200,
        message: 'User is Succesfully Registerd'
    }
}
function nationDoesntExisted(){
    return{
        status: 400,
        message: 'Nation is Not Existed'
    }
}
function genreDoesntExisted(){
    return{
        status: 400,
        message: 'Genre is Not Existed'
    }
}
function hashPasword(password) {
    
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, configs.saltRounds, function(err, hash) {
            if (err) reject(err);
            else {
              resolve(hash);
            }
        });
    })
}
function isUserRegisterd(email){
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM `users` WHERE"+` email = '${email}'`, (err,rows, fields) => {
            if(err) reject(err); 
            resolve(rows);
        });
    });
}
/*
const decodeMyToken = (token) => {
    //const decodedToken = jwt.verify(token, "Secretkey");
    console.log('called')
    return new Promise((resolve, reject) => {
        if(err) reject(err)
        else{
            console.log("decodedToken")
        }
    })   
}
*/
function isNationExisted(nation){
    return new Promise((resolve, reject) => {
        helperItems.nations.map((item,index) => {
            if(item.nationality === nation){
                resolve(item.nationid)
            }
        })
    }
)}

function isGenreExisted(genre){
    return new Promise((resolve, reject) => {
        helperItems.genres.map((item,index) => {
            if(item.genre === genre){
                resolve(item.genreid)
            }
        })
    }
)}
function editText(text){
    return new Promise((resolve, reject) =>{
        const newText = text.replace(/'/gi," ")
        resolve(newText)
    })
}
const comparePassword = (password, hashPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashPassword, function(err, result) {
            if (err) reject(err);
            else {
              resolve(result);
            }
        });
    })
}

const getHeader = (req) => {
    
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let decoded = jwt_decode(token);

    return decoded;
}
module.exports = {
    getOffset,
    emptyOrRows,
    handleErrors,
    userExisted,
    itemDeleted,
    userDeleted,
    itemAdded,
    registerCompleted,
    hashPasword,
    isUserRegisterd,
    isNationExisted,
    isGenreExisted,
    editText,
    comparePassword,
    getHeader
}