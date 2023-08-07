const loginModels = require('../models/loginModels');
const helpers = require('../helpers/helper');
const isValid = true;
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');


function getLoginAccountController(req, res) {
    const {email, password} = req.body
    //console.log(email)

    if(isValid){
        loginModels.getAccount(email)
            .then(rows => {
                if(rows.length > 0){

                    helpers.comparePassword(password ,rows[0].password)
                    .then(result => {
                            if(result === true){
                                /*
                                const userid = rows[0].userid;
                                (async()=> {
                                    async function getCarts(){
                                        const models = await loginModels.getCartItems(userid)
                                        //console.log('models', models)
                                        return(models)
                                    }
                                    const userCarts = await getCarts()
                                   
                                })()    */
                                const token = jwt.sign({
                                    rows //, userCarts, userid
                                }, 'Secretkey')
                                
                                res.send(token)
                                                            
                            }else{
                                res.send(helpers.handleErrors())
                            }
                        })
                }else{
                    res.send(helpers.handleErrors())
                }
            })
            .catch(err => {
                helpers.handleErrors()
            });
    }else{
        res.send(helpers.handleErrors())
    }
}

async function getChoosedCartItemsController(req,res){

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let decoded = jwt_decode(token);
    const userid = decoded.rows[0].userid;
    
    const models = await loginModels.getChoosedCartItems(userid);
    if(models.length && models.length > 0){
        res.send(models)
    }else{
        res.send([])
    }
    
} 
async function deleteChoosedCartItemsController(req,res){

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let decoded = jwt_decode(token);
    const userId = decoded.rows[0].userid;
    const itemId = req.body.itemid;
    
    const models = await loginModels.deleteChoosedCartItems(userId, itemId);
    if(models.length && models.length > 0){
        res.send(models)
    }else{
        res.send(helpers.itemDeleted())
    }
    
}

/*
    v8 -> javascript kodlarini parse edir 000101010010101010101010

    v8 > callstack (kodlarin run oldugu yer)        yaddas: [1kod, 2kod ]

    queue []

    const authHeader = req.headers['authorization']; // sync ani run olur 1
    const token = authHeader && authHeader.split(' ')[1]; // sync ani run olur 1
    setTimeout(()=> {console.log}, 0) makro
    async await let decoded = jwt_decode(token); 1 // 100ms mikro
    const userId = decoded.rows[0].userid; // ani run 1
    const itemId = req.body.itemid; // ani 1

    104

    125645


*/

async function addChoosedCartItemsController(req,res){

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let decoded = jwt_decode(token);
    const userId = decoded.rows[0].userid;
    const itemId = req.body.itemid;
    
    const models = await loginModels.addChoosedCartItems(userId, itemId);
    if(models.length && models.length > 0){
        res.send(models)
    }else{
        res.send(helpers.itemAdded())
    }
    
}

module.exports = { getLoginAccountController, getChoosedCartItemsController, deleteChoosedCartItemsController, addChoosedCartItemsController }







