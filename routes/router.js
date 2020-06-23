const express = require('express');
const router = express.Router();
const videoModel = require('../models/videoModel');
const controller = require('../controllers/videoController');

router.get('/IAMREAL', (req, res) => {
    res.render('create');
})

/*
router.get('/', (req, res) => {
    res.render('create');
})
*/


router.get('/login', controller.login);

router.get('/', controller.getVideoPage)

router.post('/add',controller.addVideo);

//router.get('/', async (req, res)=>{controller.findOneVid});
//router.get('/deleteVideos',controller.getDeletePage)
//router.post('/:id/delete', controller.deleteVideo);

router.post('/search', controller.search);
router.get('/login', controller.getLoginPage);
router.post('/login', controller.login);

module.exports = router;