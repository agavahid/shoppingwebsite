const classicsModels = require('../models/classicsModels');
const helpers = require('../helpers/helper');
const isValid = true;

function getDataController(req, res) { 
   
    if(isValid){
        classicsModels.getData()
        .then(rows => {
            res.send(rows); 
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        });
    }else{
        res.send(helpers.handleErrors());
    }
}

function getNationController(req, res) {
    const id = req.params.id;    

    if(isValid){
        classicsModels.getNation(id)
        .then(rows => {
            res.send(rows);
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        });
    }else {
        res.send(helpers.handleErrors());
    }
}

function getGenreController(req, res) {
    const id = req.params.id;  
    const authHeader = req.headers['authorization'];
    //console.log(req.params)
    
    if(authHeader !== undefined){
        const decoded = helpers.getHeader(req)
        const userid = decoded.rows[0].userid;
        classicsModels.getGenre(id, userid)
        .then(rows => {
            res.send(rows);
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        });
    }else if(authHeader === undefined){
        classicsModels.getGenre(id)
        .then(rows => {
            res.send(rows);
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        });
    }
    else {
        res.send(helpers.handleErrors());
    }
    /*
    const token = authHeader && authHeader.split(' ')[1];
    let decoded = jwt_decode(token);

    console.log(decoded)
    
        cities: {
            data: []
        },
        metros: {
            data: []
        },
        price: {
            data: []
        }
    res.send({
        
    })
    */
}
function getItemController(req,res){
    let authHeader = req.headers['authorization'];
    const {id} = req.params;
    
    if(authHeader !== undefined){
        const decoded = helpers.getHeader(req)
        const userid = decoded.rows[0].userid;
        
        classicsModels.getItem(id,userid)
        .then(rows => {
            res.send(rows);
        })
    }
    else if(authHeader === undefined){
        classicsModels.getItem(id)
        .then(rows => {
            res.send(rows);
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        });
    }else {
        res.send(helpers.handleErrors());
    }
}
function searchItemController(req, res){
    const recivedSearchInput = req.query.q;
    //console.log(recivedSearchInput)
    if(isValid){
        classicsModels.searchItem(recivedSearchInput)
        .then(rows => {
            res.send(rows);
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        })
    }else{
        res.send(helpers.handleErrors())
    }
}
function blogControllers(req,res){
    if(isValid){
        classicsModels.blogItems()
        .then(rows => {
            res.send(rows);
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        })
    }else{
        res.send(helpers.handleErrors())
    }
}
function blogItemControllers(req,res){
    id = req.params.id
    if(isValid){
        classicsModels.getblogItem(id)
        .then(rows => {
            res.send(rows);
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        })
    }else{
        res.send(helpers.handleErrors())
    }
}
function userControllers(req,res){
    if(isValid){
        classicsModels.getUsers()
        .then(rows => {
            res.send(rows);
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        })
    }else{
        res.send(helpers.handleErrors())
    }
}
function changeItemController(req,res){
    const {fullname, piece, born, url, id} = req.body;
    const type = req.params.type
    //console.log(fullname, piece, born, id)
    if(true){
        classicsModels.changeItem(fullname, piece, born, id, type)
        .then(rows => {
            res.send(rows);
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        })
    }
    else{
        res.send(helpers.handleErrors())
    }
}
function deleteItemController(req,res){
    const id = req.params.id;
    if(isValid){
        classicsModels.deleteItem(id)
        .then(deleted => {
            res.send(helpers.itemDeleted())
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        })
    }else{
        res.send(helpers.handleErrors());
    }
}
function deleteUserController(req,res){
    const id = req.params.id;    
    //console.log(id)
    if(isValid){
        classicsModels.deleteUser(id)
        .then(rows => {
            res.send(helpers.itemDeleted())
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        })
    }else{
        res.send(helpers.handleErrors());
    }
}

function deleteBlogController(req,res){
    const id = req.params.id;  
    console.log(id)  
    if(isValid){
        classicsModels.deleteBlog(id)
        .then(rows => {
            res.send(helpers.itemDeleted())
        })
        .catch(err => {
            res.send(helpers.handleErrors());
        })
    }else{
        res.send(helpers.handleErrors());
    }
}
function addItemController(req, res){
    const {author, piece, born, nation, genre, url, description} = req.body; 
    const type = req.params.type;  
    if(isValid){
        classicsModels.addItem(author, piece, born, nation, genre, url, description, type)
        .then(rows => {
            console.log(rows)
            res.send(rows)
        })
        .catch(err => {
            res.send(helpers.handleErrors())
        })
    }else{
        res.send(helpers.handleErrors());
    }
}
module.exports = {
    getDataController,
    getNationController,
    getGenreController,
    getItemController,
    searchItemController,
    blogControllers,
    blogItemControllers,
    userControllers,
    changeItemController,
    deleteItemController,
    deleteUserController,
    deleteBlogController,
    addItemController
}