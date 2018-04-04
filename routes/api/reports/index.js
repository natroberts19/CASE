module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

    const reportsController = require("../../../controllers/reportsController");
    

    // Matches with "/api/reports.
    router.route("/findall")
      .get(reportsController.findAllReport)
    router.route("/findmyactive")
      .get(reportsController.findMyActiveReport)
    router.route("/findmyinactive")
      .get(reportsController.findMyInactiveReport)
    router.route("/findmyall")
      .get(reportsController.findMyAllReport)
    
    module.exports = router;

	return router;
};



