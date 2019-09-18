var express = require('express');
var path = require('path');

//Set PORT
var PORT = process.env.PORT || 3000;

//Initialise express
var app = express();

//Serve static content to the server from the 'public' directory
app.use(express.static(path.join(__dirname, '/public')));

//Parse application body
app.use(express.urlencoded(({extended: true})));
app.use(express.json());

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controller.js');

app.use(routes);

// Start server
app.listen(PORT, function() {
  console.log("Server listening on http://localhost:" + PORT);
});