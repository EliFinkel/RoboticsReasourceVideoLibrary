
//app.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const alert = require('alert-node');
const path = require('path');

//hello world

const routes = require('./routes/router.js'); // Imports routes for the products
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
  extended: true
}));



// Set up mongoose connection
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vertigoPerson:vertigoUser123@videos-qkoil.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true  })

mongoose.Promise = global.Promise;

mongoose.set('useFindAndModify', true);


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));


app.use('/', routes);



app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



let port = process.env.PORT || 2000;
app.use(express.static(__dirname));
app.listen(port, () => {

    console.log('Server is up and running on port number ' + port);
});