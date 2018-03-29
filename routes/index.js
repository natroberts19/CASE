module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

	console.log("this is the routes index.js");
	
	router.use("/auth",require("./authRoutes.js")(passport));

	// This will use all the routes included in the api folder.
	router.use("/api",require("./api")(passport));

	// If no api routes are hit, send the React app
	router.use(function(req, res) {
	  res.sendFile(path.join(__dirname, "../client/build/index.html"));
	});

	return router;
};