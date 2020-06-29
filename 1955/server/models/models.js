  
const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    name:{type: String, 
        required: [true, "Task is required"], 
        minlength: 2},
        trim: true
}, {timestamps:true }

);

const Person = mongoose.model('Person', PersonSchema);

module.exports= PersonSchema, Person;