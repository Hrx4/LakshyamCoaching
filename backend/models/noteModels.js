const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    
    noteTitle: {
        type: String,
        required: [true, "Please add the title"],
    },
    noteSubject: {
        type: String,
        required: [true, "Please add the subject"],
    },
    noteClass: {
        type: String,
        required: [true, "Please add the class"],
    },
    noteBatch: {
        type: String,
        required: [true, "Please add batch"],
    },
    noteImage: {
        type: String,
        required: [true, "Please add image"],
    },
    notePdf: {
        type: String,
        required: [true, "Please add pdf"],
    },
    noteCourse: {
        type: String,
        required: [true, "Please add course"],
    },
    
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("note" , noteSchema)