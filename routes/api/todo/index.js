// -------------------------------------
// api routes for the Tasks (Todo) page.
// -------------------------------------

module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

    const todoController = require("../../../controllers/todoController");
 
// Matches with "/api/todo
	router.route("/")
	.post(todoController.createTodo);

	// Matches with "/api/todo/all"
	router.route("/all")
	.get(todoController.findAllTodos)

	module.exports = router;

	return router;
};
