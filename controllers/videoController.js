
const videoModel = require('../models/videoModel');
const alert = require('alert-node');

exports.addVideo = async (req, res) => {
    let newVid = new videoModel(
        {
            title: req.body.title,
            vidType: req.body.vidType,
            url: req.body.url
        }
    );


  
    const videos = await videoModel.find();
    for(var i = 0; i < videos.length; i++){
        
        if(newVid.url == videos[i].url || newVid.title == videos[i].title){
            alert('That Video Already Exists :');
            res.redirect('/iAmReal');
            return;
            
        }
        else if(newVid.url == "" || newVid.title == ""){
            alert('You Are Missing Something!');
            res.redirect('/iAmReal');
        }
    }

    
    newVid.save(function (err) {
        if (err) {
            return next(err);
        }
        console.log('Video Succesfully Added');
        res.redirect('/');

       
    })
}

exports.deleteVideo = async (req,res) => {
    videoModel.findByIdAndRemove(req.body.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
}

exports.getVideoPage = async (req,res) => {
    const videos = await videoModel.find();
    res.render('videos', {videos});


}

exports.getDeletePage = async (req, res) => {
   res.redirect('/');
}
 





exports.search =  async (req,res) => {
    var item = req.body.searchItem.toUpperCase();
    var words = item.split(" ");
    var word2 = words[1];
    if(item == ""){
       res.redirect('/');
    }
    var firstLetter = item.charAt(0);
   
    const videos = await videoModel.find();
    var vids = [];
    for(var i = 0; i < videos.length; i++){
            
        if(videos[i].title.charAt(0) == firstLetter /*|| videos[i].title.charAt(0) == word2.charAt(0)*/){
            
            vids.push(videos[i]);
            
        } 
        

    }
   
    if(vids < 1){
       alert("Sorry We Can't Find That Video :(");
       res.redirect('/');
    }
    res.render('videos', {videos: vids});
    

}