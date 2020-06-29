const controller = require('../controllers/controller.js');

module.exports=function(app){
    app.get('/', (req,resp)=>{
        controller.findAll(req,resp);
    });

    app.get('/new/:name/', (req,resp)=>{
        controller.create(req,resp);
    });

    app.get('/remove/:name/',(req,resp)=>{
       controller.delete(req,resp);
    });

    app.get('/:name', (req,resp)=>{
        controller.display(req,resp);
    });

}