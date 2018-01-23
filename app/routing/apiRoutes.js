// Search for Specific Game (or all games) - provides JSON
var paths = require("path")


function expressify(app){

}

	app.get("/", function(req, res) {
 	res.sendFile(path.join(__dirname, "./app/routing/apiRoutes"));
 
	});


	app.get("/survey", function(req, res) {
 	res.sendFile(path.join(__dirname, "./app/routing/apiRoutes"));
 
	});

	app.get("/home", function(req, res) {
 	res.sendFile(path.join(__dirname, "./app/routing/apiRoutes"));

	});




  

//Add CommentCollapse 
