// ----------------------------------
// api routes for the Students page.
// ----------------------------------

module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

    const studentsController = require("../../../controllers/studentsController");
    

    // Matches with "/api/students
    router.route("/")
      // .get(studentsController.findAll)
      .post(studentsController.createOne);
    
    // Matches with "/api/students/:id"
    router.route("/:id")
      .get(studentsController.findById)
      .put(studentsController.updateById);
    
    module.exports = router;

	return router;
};



