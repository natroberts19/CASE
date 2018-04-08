// -------------------------------------------------------
// Defining methods for the advisorsController.
// -------------------------------------------------------

const db = require("../models");

module.exports = {

// GET query for counting all students from the CASE database.
    countMyAll: function(req, res) {
        console.log("This is the advisorController countAll.");
        db.Student
        .find({
            advisor: "Natalie"
        })
        .count({}, function (err, count) {
            console.log("count all", count);
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

// GET query for finding all Active students with Advisor = "Natalie."
    countMyActive: function(req, res) {
        console.log("This is the advisorsController countMyActive report.");
        db.Student
        .find({
            advisor: "Natalie",
            studentStatus: "Active"
        })
        .count({}, function (err, count) {
            console.log("count Natalie active", count);
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

// GET query for finding all Inactive students with Advisor = "Natalie."
    countMyInactive: function(req, res) {
        console.log("This is the advisorsController countMyInactive report.");
        db.Student
        .find({
            advisor: "Natalie",
            studentStatus: "Inactive"
        })
        .count({}, function (err, count) {
            console.log("count Natalie inactive", count);
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
  
// GET query for finding all Active students with Advisor = "Karen."
    countKarenActive: function(req, res) {
        console.log("This is the advisorsController countKarenActive count.");
        db.Student
        .find({
            advisor: "Karen",
            studentStatus: "Active"
        })
        .count({}, function (err, count) {
            console.log("count Karen active", count);
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // GET query for finding all Active students with Advisor = "Diana."
    countDianaActive: function(req, res) {
        console.log("This is the advisorsController countDianaActive count.");
        db.Student
        .find({
            advisor: "Diana",
            studentStatus: "Active"
        })
        .count({}, function (err, count) {
            console.log("count Diana active", count);
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

     // GET query for finding the MSGO count of all students with a higher result.
     countMSGOResult: function(req, res) {
        console.log("This is the advisorsController MSGO result count.");
        db.Student
        .find({
            advisor: "Natalie",
            result: { $in: ['Improved Eng Level', 'Got GED', 'Enrolled Tech', 'Enrolled College', 'Got Employment', 'Got Job Promotion'] }
        })
        .count({}, function (err, count) {
            console.log("MSGO Result Count", count);
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
