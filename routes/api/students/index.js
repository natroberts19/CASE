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
      .put(studentsController.updateOne);

    // Matches with "/api/students/search/:searchId"
    router.route("/search/:searchId")
      .get(studentsController.findBySearch);


    module.exports = router;

	return router;
};



