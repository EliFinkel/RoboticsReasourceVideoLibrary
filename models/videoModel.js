const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let videoSchema = new Schema({
    title: {type: String},

    url: {type: String},

    vidType: {type: String}
});


module.exports = mongoose.model('Video', videoSchema);
