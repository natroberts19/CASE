var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    // studentId: {
    //     type: Number,
    //     unique: true,
    //     validate: [
    //         // Function takes in the new `longstring` value to be saved as an argument
    //         function (input) {
    //         // If this returns true, proceed. If not, return the error message below
    //             return input.length = 7;
    //         },
    //         // Error Message
    //         "Student Id must be 7 digits."
    //     ]
    // },
    dueDate: {
        type: Date,
    },
    todoTitle: {
        type: String,
        trim: true,
        // required: "String is Required"
    },
    todoNote: {
        type: String,
        trim: true,
        // required: "String is Required"
    },
    todoStatus: {
        type: String,
        trim: true,
        // required: "String is Required"
    },
});

// This creates our model from the above schema, using mongoose's model method.
var Todo = mongoose.model("Todo", TodoSchema);

// Export the Todo model.
module.exports = Todo;