const mongoose = require('mongoose');
const Person = mongoose.model('Person');
const bodyParser = require('body-parser')

module.exports= {

    findAll: function(req,resp){
        Person.find()
        .then(data=> {
            resp.json(data);
        })
        .catch(err=> resp.json(err));
    },

    create: function(req,resp){
        // console.log(req);
        const p = new Person();
        p.name = req.params.name;
        p.save()
            .then(data =>resp.json(data))
            .catch(err => resp.json(err));
    },

    display: function(req,resp){
        Person.find({name: req.params.name})
        .then(data=> {
            resp.json(data);
        })
        .catch(err=> resp.json(err));
    },

    delete: function(req,resp){
        Person.deleteOne({name: req.params.name})
        .then(resp.redirect('/'))
        .catch(err=> resp.json(err));
    },

}