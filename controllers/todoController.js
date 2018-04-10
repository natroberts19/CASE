// -------------------------------------------------------
// Defining methods for the todoController.
// -------------------------------------------------------

const db = require("../models");

module.exports = {

// POST route for creating a new todo item in the database. 
    createTodo: function(req, res) {
        console.log("this is createTodo:", req.body);
        
        db.Todo
        .create(req.body)
        .then(dbModel => {
            console.log("dbModel:", dbModel);
            res.json(dbModel)
        } )
        .catch(err => res.status(422).json(err));
    },

// GET route for retrieving one todo from the database. 
    findOneTodo: function(req, res) {
        console.log("this is find by id");
        db.Todo
        .findOne(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

// GET query to find all Todo items.
    findAllTodos: function(req, res) {
        console.log("this is find all to dos");
        db.Todo
        .find(req.query)
        .sort({ dueDate: 1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

// POST route to delete one Todo from the database. 
    deleteTodo: function(req, res) {
        console.log("this is delete to do by id");
        db.Todo
        .deleteOne({ _id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};