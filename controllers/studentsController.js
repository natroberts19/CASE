// -------------------------------------------------------
// Defining methods for the studentsController.
// -------------------------------------------------------
const db = require("../models");

module.exports = {

// POST route for creating a new student in the database. 
    createOne: function(req, res) {
        console.log("this is createOne:", req.body);
        
        db.Student
        .create(req.body)
        .then(dbModel => {
            console.log("dbModel:", dbModel);
            res.json(dbModel)
        } )
        .catch(err => res.status(422).json(err));
    },

// GET route for retrieving one student from the database. 
    findById: function(req, res) {
        console.log("this is find by id");
        db.Student
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

// POST route to update one student from the database. 
    updateById: function(req, res) {
        console.log("this is update student by id");
        db.Student
        .findOneAndUpdate({ _id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

// GET route for retrieving all students from the database.
    // findAll: function(req, res) {
    //     console.log("this is find all students");
    //     db.Student
    //     .find()
    //     .sort({ date: -1 })
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
  
};
