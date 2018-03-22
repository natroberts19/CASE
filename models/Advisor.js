const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object.
const AdvisorSchema = new Schema({
  advisorName: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  activeAssigned: {
    type: Number,
    required: true
  },
  inactiveAssigned: {
    type: Number,
    required: true
  },
  msgoGoal: {
    type: Number,
    required: true
  },
  msgoCurrent: {
    type: Number,
    required: true
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

// This creates our model from the above schema, using mongoose's model method.
const Advisor = mongoose.model("Advisor", AdvisorSchema);

// Export the Advisor model.
module.exports = Advisor;
