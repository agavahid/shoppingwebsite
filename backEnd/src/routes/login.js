const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginControllers')




router.post('/' , (req,res) => {
  loginController.getLoginAccountController(req, res)
});
router.get('/shoppingcart' , (req,res) => {
  loginController.getChoosedCartItemsController(req, res)
});
router.delete('/shoppingcart' , (req,res) => {
  loginController.deleteChoosedCartItemsController(req, res)
});
router.put('/shoppingcart' , (req,res) => {
  loginController.addChoosedCartItemsController(req, res)
});


module.exports = router;