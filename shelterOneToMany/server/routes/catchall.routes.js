const router = require('express').Router();

const path = require('path');

module.exports = router.all('*',function(req, res){
    console.log(`caught route ${req.url}`);
    const file = path.resolve('dist/myApp/index.html');
    res.sendFile(file);
});
