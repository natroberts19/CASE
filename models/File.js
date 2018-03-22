var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var FileSchema = new Schema({
    
    file: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// This creates our model from the above schema, using mongoose's model method
var File = mongoose.model("File", FileSchema);

// Export the File model
module.exports = File;