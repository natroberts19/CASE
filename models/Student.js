var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object.
var StudentSchema = new Schema({
    studentId: {
        type: String,
        trim: true
        // unique: true,
        // validate: [
        //     // Function takes in the new `longstring` value to be saved as an argument
        //     function (input) {
        //     // If this returns true, proceed. If not, return the error message below
        //         return input.length = 7;
        //     },
        //     // Error Message
        //     "Student Id must be 7 digits."
        //     ]
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        trim: true
        // required: true
    },
    email: {
        type: String,
        trim: true
        // match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    program: {
        type: String
        // required: true
    },
    schedule: {
        type: String
        // required: true
    },
    campus: {
        type: String
        // required: true
    },
    studentStatus: {
        type: String
        // required: true
    },
    numContacts: {
        type: Number
    },
    highLevelEd: {
        type: String
    },
    goal: {
        type: String
    },
    result: {
        type: String
    },
    advisor: {
        type: String,
    },
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
    files: [{ type: Schema.Types.ObjectId, ref: 'File' }],
    date: { 
        type: Date, 
        default: Date.now 
    }
});

// This creates our model from the above schema, using mongoose's model method
const Student = mongoose.model("Student", StudentSchema);

// Export the Student model.
module.exports = Student;
