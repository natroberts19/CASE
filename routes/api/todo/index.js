 // ----------------------------------
// api routes for the Tasks (Todo) page.
// ----------------------------------

module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

    const todoController = require("../../../controllers/todoController");
 
 // Matches with "/api/todo
 router.route("/")
 .get(todoController.findAllTodos)
 .post(todoController.createTodo);

// Matches with "/api/todo/:id"
router.route("/:id")
 .get(todoController.findOneTodo)
 .put(todoController.deleteTodo);

 module.exports = router;

 return router;
};
