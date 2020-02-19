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

router.get('/', controller.getVideoPage)

router.post('/add',controller.addVideo);

//router.get('/', async (req, res)=>{controller.findOneVid});
router.get('/deleteVideos',controller.getDeletePage)
router.post('/:id/delete', controller.deleteVideo);

router.post('/search', controller.search);


module.exports = router;