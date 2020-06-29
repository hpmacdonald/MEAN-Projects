// EXPRESS SETUP //
const express = require('express');
const app = express();
const server = app.listen(8000);
// EXPRESS MIDDLEWARE + SERVE STATIC FILES //
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks_db', {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next){
    console.log(req.method,req.url)
    next();
})
app.use(express.static( __dirname + '/dist/restfultasks' ));
console.log( __dirname + '/dist/public')


// SERVER-SIDE SCRIPT + MONGOOSE //
require('./server/config/routes.js')(app)


