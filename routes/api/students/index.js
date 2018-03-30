module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

    const studentsController = require("../../../controllers/studentsController");
    

    // Matches with "/api/students
    router.route("/")
      .get(studentsController.findAll)
      .post(studentsController.createOne)
    
    // Matches with "/api/students/:id"
    router.route("/:id")
      .get(studentsController.findById)
    
    module.exports = router;

	return router;
};



