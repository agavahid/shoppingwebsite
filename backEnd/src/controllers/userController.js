const userModel = require('../models/userModels');
const helpers = require('../helpers/helper');
const jwt = require("jsonwebtoken")
const isValid = true;


function userController(req,res){
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "Secretkey")
    
    if(isValid){
        
        userModel.controlAccount()
            .then(rows => {
                res.send(decodedToken)
            })
            .catch(err => {
                helpers.handleErrors()
            })

    }
    else{
        res.send(helpers.handleErrors())
    }
}




module.exports = {userController}