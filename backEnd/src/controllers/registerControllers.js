const regiserModel = require('../models/registerModels')
const helpers = require('../helpers/helper')
const isValid = true;


function getRegisterAccountController(req, res) {
    const { username, password, email, phone, location } = req.body;
    //console.log(username, password, email, phone, location);

    // fieldleri yoxlasin bos olmasin. Error varsa > 
    // emaile gore user table-na sorgu gonerirsen ki gorek hemin user evvelceden qeydiyatdan kecib yoxsa ilk defedi > 
    // Bu user artiq qeydiyatdan kecib
    
    
    helpers.isUserRegisterd(email)
        .then(rows=> {
            if(rows.length && rows.length > 0){
                res.send(helpers.userExisted()) 
            }else{
                helpers.hashPasword(password).then(hashedPassword => {
            
                    regiserModel.createAccount(username, hashedPassword, email, location, phone)
                    .then(rows => {
                        //console.log(rows)
                        res.send(rows)
                    }).catch(err => { 
                        helpers.handleErrors()
                    })
                }).catch(err => console.log(err))
            }
        })
    
    
    /*
    if(isValid){

        helpers.hashPasword(password).then(hashedPassword => {
            
            regiserModel.createAccount(username, hashedPassword, email, location, phone)
            .then(rows => {
                //console.log(rows)
                res.send(rows)
            }).catch(err => { 
                helpers.handleErrors()
            })
        }).catch(err => console.log(err))
        
        
    }
    else{
        helpers.handleErrors()
    }
    */
}


module.exports = { getRegisterAccountController }