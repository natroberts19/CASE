module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

	router.use("/students",require("./students")(passport));
	router.use("/notes",require("./notes")(passport));
	router.use("/reports",require("./reports")(passport));
	router.use("/advisors",require("./advisors")(passport));

	// router.get("/testroute", function(req, res) {
	// 	res.send("you got me");
	// })

	return router;
};