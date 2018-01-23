var express = require("express");
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

var app = express();

apiRoutes(app);
htmlRoutes(app);