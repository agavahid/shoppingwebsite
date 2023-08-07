const adminModels = require('../models/adminModels');
const helpers = require('../helpers/helper');
const isValid = true;
const jwt = require('jsonwebtoken');



async function getAdminController(req, res) { 
    const { adminname, adminpassword } = req.body;
    //console.log(adminname, adminpassword)
    const isAdmin = await adminModels.getAdmin(adminname, adminpassword);
    //console.log(isAdmin)
    if(isAdmin.length && isAdmin.length > 0){
        const token = jwt.sign({
            isAdmin
        }, 'Secretkey')
        res.send(token)
    }else{
        res.send(helpers.handleErrors())
    }
}

module.exports = { getAdminController }