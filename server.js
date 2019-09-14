var express = require('express');

//Set PORT
var PORT = process.env.PORT || 3000;

//Initialise express
var app = express();

//Serve static content to the server from the 'public' directory
app.use(express.static('/public'));

//Parse application body
app.use(express.urlencoded(({extended: true})));
app.use(express.json());

var exphbs = require('express-handlebars');

exphbs.set("handlebars", exphbs({defaultLayout: "main"}));
exphbs.set("view engine", "handlebars");

// Start server
app.listen(PORT, function() {
  console.loj("Server listening on http://localhost:" + PORT);
});