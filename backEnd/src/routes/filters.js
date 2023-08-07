const express = require('express');
const router = express.Router();
const filterController = require('../controllers/filterController');

router.post('/', (req, res) => {
   filterController.filterController(req, res)
});


module.exports = router;