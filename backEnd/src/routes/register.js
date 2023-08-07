const express = require('express');
const router = express.Router(); 
const registerControllers = require('../controllers/registerControllers')



router.post('/', (req,res) => {
    registerControllers.getRegisterAccountController(req,res)
});

module.exports = router
