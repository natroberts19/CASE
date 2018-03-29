const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    
    advisorName: {
        type: String,
        trim: true,
        // required: "String is Required"
    },
    typeContact: {
        type: String,
        trim: true,
        // required: "String is Required"
    },
    note: {
        type: String,
        trim: true,
        // required: "String is Required"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// This creates our model from the above schema, using mongoose's model method
const Note = mongoose.model("Note", NoteSchema);

// Export the Note model.
module.exports = Note;