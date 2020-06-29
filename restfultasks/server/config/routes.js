const taskController = require('../controllers/tasks.js')
module.exports = (app) => {
    app.get('/tasks', (req,resp)=>{
        taskController.index(req, resp);
    });

    app.get('/tasks/:taskID', (req, resp)=>{
        taskController.thisTask(req, resp);
    });

    app.post('/tasks/:title', (req, resp)=>{
        taskController.new(req, resp);
    });
    app.put('/tasks/:taskID', (req,resp)=>{
        taskController.update(req, resp);
    });

    app.delete('/tasks/:taskID', (req,resp)=>{
        taskController.remove(req, resp);
    });
};