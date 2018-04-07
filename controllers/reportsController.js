// -------------------------------------------------------
// Defining methods for the reportsController.
// -------------------------------------------------------

const db = require("../models");

module.exports = {

// GET query for retrieving all students from the CASE database.
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

// GET routes for counting all ABE, GED, and ESOL students from the database.
    countABE: function(req, res) {
        console.log("this is studentsController to count all ABE students");
        db.Student
        .find({
            program: "ABE"
        })
        .count({}, function (err, count) {
            console.log("count ABE", count);
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    countGED: function(req, res) {
        console.log("this is to count all GED students");
        db.Student
        .find({
            program: "GED"
        })
        .count({}, function (err, count) {
            console.log("count GED", count);
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    countESOL: function(req, res) {
        console.log("this is to count all ESOL students");
        db.Student
        .find({
            program: "ESOL"
        })
        .count({}, function (err, count) {
            console.log("count ESOL", count);
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

};
