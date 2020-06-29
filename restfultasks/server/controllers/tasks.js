const Task = require('../models/task.js')
module.exports = {
    index: (request, response) => {
        Task.find()
            .then(allTasks => {
                response.json(allTasks)
            })
            .catch(err => {
                response.json(err)
            });
    },
    thisTask: (request, response) => {
        const taskID = request.params.taskID;
        Task.findById(taskID)
            .then(thisTask => {
                response.json(thisTask)
            })
            .catch(err=> {
                response.json(err)
            });
    },
    new: (request, response) => {
        const t = new Task();
        t.title = req.params.title;
        t.save()
            .then(data =>resp.json(data))
            .catch(err => resp.json(err));
    },
    update: (request, response) => {
        const taskID = request.params.taskID;
        Task.findByIdAndUpdate(taskID, request.body, { new: true })
            .then(thisTask => {
                response.json(thisTask)
            })
            .catch(err => {
                response.json(err)
            });
    },
    remove: (request, response) => {
        const taskID = request.params.taskID;
        Task.findByIdAndRemove(taskID)
            .then(thisTask => {
                response.json(thisTask)
            })
            .catch(err=> {
                response.json(err)
            });
    }
};