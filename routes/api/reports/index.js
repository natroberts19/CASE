// ---------------------------------
// api routes for the Reports page.
// ---------------------------------

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

  // The following routes handle exporting report data to .csv files.
    // router.route("/findall/exporttocsv")
    //   .get(reportsController.findAllReport)
    // router.route("/findmyactive/exporttocsv")
    //   .get(reportsController.findMyActiveReport)
    // router.route("/findmyinactive/exporttocsv")
    //   .get(reportsController.findMyInactiveReport)
    // router.route("/findmyall/exporttocsv")
    //   .get(reportsController.findMyAllReport)

    module.exports = router;

	return router;
};



