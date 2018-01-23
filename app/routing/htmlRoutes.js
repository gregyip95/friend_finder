var paths = require("path")


function expressify(app){

}

	app.get("/", function(req, res) {
 	res.sendFile(path.join(__dirname, "/../public/view.html"));
 
	});


	app.get("/survey", function(req, res) {
 	res.sendFile(path.join(__dirname, "/../public/survey.html"));
 
	});

	app.get("/home", function(req, res) {
 	res.sendFile(path.join(__dirname, "/../public/home.html"));

	});

