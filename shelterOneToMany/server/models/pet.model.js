const mongoose = require('mongoose');

const {Schema} = mongoose;

const PetSchema = new Schema({
    name: {
        type: String,
        required: [true,'You did not add name'],
        trim: true,
        minlength: [4,'Not enough characters in Name']
    },
    type: {
        type: String,
        required: [true,'You did not add name'],
        trim: true,
        minlength: [3,'Not enough characters in type']
    },
    description: {
        type: String,
        required: [true,'You did not add name'],
        trim: true,
        minlength: [3,'Not enough characters in type']
    },
    skill1: {
        type: String,
        required: [false],
        trim: true,
    },
    skill2: {
        type: String,
        required: [false],
        trim: true,
    },
    skill3: {
        type: String,
        required: [false],
        trim: true,
    },
    toys: [{
         type: Schema.Types.ObjectId,
         ref: 'Toy'           
            }
        ]


},{
    timestamps: true
});

module.exports = mongoose.model('Pet',PetSchema);
