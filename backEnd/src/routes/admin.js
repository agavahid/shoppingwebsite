const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.post('/login', (req, res) => {
    adminController.getAdminController(req, res);
}); 

module.exports = router