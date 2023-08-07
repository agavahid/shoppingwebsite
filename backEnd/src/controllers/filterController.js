const filterModel = require('../models/filterModels');
const helpers = require('../helpers/helper');
const isValid = true

function filterController(req,res){
    if(isValid){
        filterModel.getData()
        .then((rows) =>
            res.send(rows)
        )
        .catch((err)=>
            helpers.handleErrors()
        )
    }
    else{
        helpers.handleErrors()
    }
}

module.exports = {filterController}