const express = require('express');
const router = express.Router();
const videoModel = require('../models/videoModel');


router.get('/add', (req, res) => {
    res.render('create');
})
router.post('/add', async(req, res) => {
    let newVid = new videoModel(
        {
            title: req.body.title,
            vidType: req.body.vidType,
            url: req.body.url
        }
    );


  
    const videos = await videoModel.find();
    for(var i = 0; i < videos.length; i++){
        
        if(newVid.url == videos[i].url){
            
            res.redirect('/add');
            return;
            
        }
    }

    
    newVid.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('Video Succesfully Added');
        res.redirect('/add');

       
    })
});

router.get('/', async (req, res)=>{
    const videos = await videoModel.find();
    res.render('videos', {videos});


})

router.get('/deleteVideos', async(req,res)=>{
    const videos = await videoModel.find();
    res.render('delete', {videos});
})
router.post('/:id/delete', async (req, res, err) => {
    videoModel.findByIdAndRemove(req.body.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
     
})

router.delete('/deleteall', (req,res)=>{
    videoModel.deleteMany();
})


module.exports = router;