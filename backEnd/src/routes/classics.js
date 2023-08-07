const express = require('express');
const router = express.Router();
const classicsControllers = require('../controllers/classicsControllers');
 

router.get('/', (req, res) => {
    classicsControllers.getDataController(req, res);
}); 
router.get('/nation/:id', (req, res) => {
    classicsControllers.getNationController(req, res);
});
router.get('/genre/:id', (req, res) => {
    classicsControllers.getGenreController(req, res);
});
router.get('/item/:id', (req, res) => {
    classicsControllers.getItemController(req, res);
});
router.get('/book/search', (req, res) => {
    classicsControllers.searchItemController(req,res);
});
router.get('/blogs', (req, res) => {
    classicsControllers.blogControllers(req,res);
});
router.get('/blogs/:id', (req, res) => {
    classicsControllers.blogItemControllers(req,res);
});
router.get('/users', (req, res) => {
    classicsControllers.userControllers(req,res);
});
router.put('/:type', (req,res) => {
    classicsControllers.changeItemController(req,res)
})
router.delete('/item/:id', (req,res) => {
    classicsControllers.deleteItemController(req,res)
});
router.delete('/user/:id', (req,res) => {
    classicsControllers.deleteUserController(req,res)
})
router.delete('/blogs/:id', (req,res) => {
    classicsControllers.deleteBlogController(req,res)
})
router.post('/:type', (req,res) => {
    classicsControllers.addItemController(req,res)
});

module.exports = router;