var connection = require('./connection.js');

function printQuestionMarks(value) {
  var arr = [];

  for(var i=0; i<value; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
  //Select all from database
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function(err, result) {
      if(err) {
        throw err;
      }
      cb(result);
    });
  },
  //Insert new value to the database
  insertOne: function(tableInput, cols, value, cb) {

    var queryString = "INSERT INTO " + tableInput;
    queryString += " (" + cols.toString() + ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(value.length);
    queryString += ");";

    // console.log("cb", cb)

    connection.query(queryString, value, function(err, result) {
      if(err) {
        throw err;
      }
      cb(result);
    });
  },
  //Update current value in the database
  updateOne: function(tableInput, cols, condition, cb) {
    var queryString = "UPDATE " + tableInput;
    queryString += " SET " + cols;
    queryString += " WHERE " + condition;
    
    connection.query(queryString, function(err, result) {
      if(err) {
        throw err;
      }
      cb(result);
    });
  }
};

//Export orm functions for model burger.js
module.exports = orm;