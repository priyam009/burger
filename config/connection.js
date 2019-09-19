//Set up MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.JAWSDB_URL,
  port: 3306,
  user: process.env.JAWSDB_USER,
  password: process.env.JAWSDB_PASSWORD,
  database: process.env.JAWSDB_DATABASE
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