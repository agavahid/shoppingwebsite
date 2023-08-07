const express = require('express');
const router = express.Router();
const professionsController = require('../controllers/professionsControllers');




router.get('/', (req, res) => {
    professionsController.professionsController(req,res)
}); 



module.exports = router;