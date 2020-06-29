const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');


const modelsPath = path.join( __dirname, '../models');
mongoose.connect("mongodb://localhost/pets", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('connected',() => console.log('connected to mongodb'));

fs.readdirSync(modelsPath)
.filter((file) => file.endsWith('.js'))
.forEach((file) => require(path.join(modelsPath,file)));