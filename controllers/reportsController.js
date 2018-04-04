// -------------------------------------------------------
// Defining methods for the reportsController.
// -------------------------------------------------------

const db = require("../models");

module.exports = {

// GET query for retrieving all students from the database.
    findAllReport: function(req, res) {
        console.log("This is the reportsController findAll report.");
        db.Student
        .find(req.query)
        .sort({ lastName: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

// GET query for finding all Active students with Advisor = "Natalie."
    findMyActiveReport: function(req, res) {
        console.log("This is the reportsController findMyActive report.");
        db.Student
        .find({
            advisor: "Natalie",
            studentStatus: "Active"})
        .sort({ lastName: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
  
// GET query for finding all Inactive students with Advisor = "Natalie."
    findMyInactiveReport: function(req, res) {
        console.log("This is the reportsController findMyInactive report.");
        db.Student
        .find({
            advisor: "Natalie",
            studentStatus: "Inactive"})
        .sort({ lastName: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

// GET query for finding all students with Advisor = "Natalie."
    findMyAllReport: function(req, res) {
        console.log("This is the reportsController findMyAll report.");
        db.Student
        .find({
            advisor: "Natalie"
            })
        .sort({ lastName: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
};
