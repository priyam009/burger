//Set up MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "pri",
  database: "burger_db"
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