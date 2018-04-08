// ---------------------------------
// api routes for the Advisors page.
// ---------------------------------

module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
    const advisorsController = require("../../../controllers/advisorsController");
    
  // Matches with "/api/advisors.
    router.route("/countmyall")
      .get(advisorsController.countMyAll)
    router.route("/countmyactive")
      .get(advisorsController.countMyActive)
    router.route("/countmyinactive")
      .get(advisorsController.countMyInactive)
    router.route("/countkarenactive")
      .get(advisorsController.countKarenActive)
    router.route("/countdianaactive")
      .get(advisorsController.countDianaActive)
    router.route("/countmsgoresult")
      .get(advisorsController.countMSGOResult)

    module.exports = router;

	return router;
};



