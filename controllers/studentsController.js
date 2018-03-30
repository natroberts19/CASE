const db = require("../models");

// Defining methods for the studentsController
module.exports = {

// POST route for creating a new student in the database. 
    createOne: function(req, res) {
        db.Student
        .create(res.json)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

// GET route for retrieving all students from the database.
    findAll: function(req, res) {
        console.log("hellllo");
        db.Student
        .find()
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

// GET route for retrieving one students from the database. 
    findById: function(req, res) {
        db.Student
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

  
};
