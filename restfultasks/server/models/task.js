const mongoose = require('mongoose')
const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Task title is required"],
        trim: true
    },
    description: {
        type: String,
        default: "",
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
}, {timestamps: true})
module.exports = mongoose.model('Task', TaskSchema);