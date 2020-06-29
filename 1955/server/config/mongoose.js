const mongoose = require('mongoose');
const path = require('path');
var models_path = path.join(__dirname, '../models');
const fs = require('fs');

fs.readdirSync(models_path)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(models_path, file)));

module.exports= function(app){
    mongoose.connect('mongodb://localhost/new_db', 
    {useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true}
    );

    mongoose.connection.once('connected', () => console.log("connected to Mongo DB"));
}