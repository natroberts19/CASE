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

// POST route for updating student information in the database. 
    updateOne: function(req, res) {
        console.log("this is updateOne:", req.body);
        const doc = {
            studentId: req.body.studentId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            program: req.body.program,
            schedule: req.body.schedule,
            campus: req.body.campus,
            studentStatus: req.body.studentStatus,
            highLevelEd: req.body.highLevelEd,
            goal: req.body.goal,
            result: req.body.result,
            advisor: req.body.advisor,
            notes: req.body.notes,
            files: req.body.files
        };
        
        db.Student
        .update({_id: req.body._id}, doc)
        .then(dbModel => {
            console.log("dbModel:", dbModel);
            res.send(dbModel)
        } )
        .catch(err => res.status(422).json(err));
    },

// GET route for retrieving one student from the database. 
    findById: function(req, res) {
        console.log("this is find by id");
        db.Student
        .findOne(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

// GET regex query to find student by user input.
    findBySearch: function(req, res) {
        console.log("this is find by 7-digit id", req.params.searchId);
        // const query = "";
        db.Student
        .findOne({studentId: req.params.searchId})
        .then(dbModel => {
            console.log("find by search", dbModel);
            // if dbModel is null, send res.json "no students found..., etc" otherwise send back the student.
            if(dbModel){
                res.json(dbModel)
            } else {
                res.json({"message": "Student not found"})
            }
            
        
        })
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
    //     .sort({ date: 1 })
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
  
};
