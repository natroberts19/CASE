var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    dueDate: {
        type: String,
        trim: true,
    },
    title: {
        type: String,
        trim: true,
        // required: "String is Required"
    },
    description: {
        type: String,
        trim: true,
        // required: "String is Required"
    }
});

// This creates our model from the above schema, using mongoose's model method.
var Todo = mongoose.model("Todo", TodoSchema);

// Export the Todo model.
module.exports = Todo;