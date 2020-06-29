const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();
require('./server/config/database')

app.use(express.static(path.join(__dirname,'dist/myApp')));
app.use(bodyparser.json());
app.use(function(req, res, next){
    console.log(req.url,req.body)
    next();
})
app.use(require('./server/routes'))
app.listen(8001, () => console.log('connected to express'));

