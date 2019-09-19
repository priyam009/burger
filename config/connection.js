//Set up MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-02.cleardb.net",
  port: 3306,
  user: "b052572f1c7d8c",
  password: "f9bc20fc",
  database: "heroku_e6aa52c12c30a70"
});

//Make connection
connection.connect(function(err) {
  if(err) {
    console.error("error connecting: " + err.stack);
  }
  console.log("connected to id: " + connection.threadId);
});

//Export connection to ORM
module.exports = connection;