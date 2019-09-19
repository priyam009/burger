//Set up MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "	s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ov69gmcyhly7r8dx",
  password: "o5u8vqsp67q86yfa",
  database: "y1g3wt17qzfvnc9d"
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