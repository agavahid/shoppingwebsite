const express = require('express');
const router = express.Router(); 
const userController = require('../controllers/userController');



router.post('/', (req,res) => {
    userController.userController(req,res)
})



module.exports = router