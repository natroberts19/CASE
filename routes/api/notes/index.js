// ------------------------------------------------
// api routes for Notes that get added to Students.
// ------------------------------------------------

module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

    const notesController = require("../../../controllers/notesController");
    
    // Matches with "/api/notes
    router.route("/:id")
      .post(notesController.postNote)
    router.route("/populateuser")
      .get(notesController.getNote)
    
    module.exports = router;

	return router;
};



