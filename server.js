// establishes server connection
// imports routes and gives server/express access to them
// establishes handlebars

var express = require("express");
var bodyParser = require("body-parser");

//will take the following two out as rest of files structure develops
var connection = require("./config/connection.js");
var orm = require("./config/orm.js");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/burgerController.js");

// app.use(routes);


app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

// orm.create("cheese", 1);
let columns = ["name", "eaten"];
let values = ["bbq", 1];
orm.create("burgers" , columns, values);
