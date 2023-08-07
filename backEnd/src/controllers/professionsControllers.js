const helpers = require('../helpers/helper');
const isValid = true;
const professionsModels = require('../models/professionsModels');






function professionsController(req, res) { 
    
    
    if(isValid){
        professionsModels.getProfessions()
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


module.exports = { professionsController }
