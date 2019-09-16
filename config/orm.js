var connection = require('./connection.js');

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function(err, result) {
      if(err) {
        throw err;
      }
      cb(result);
    })
  },
  insertOne: function(table, cols, value, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (" + cols + ") ";
    queryString += "VALUES " + value.toString() + ";";

    connection.query(queryString, function(err, result) {
      if(err) {
        throw err;
      }
      cb(result);
    })
  },
  updateOne: function() {
    var queryString = "UPDATE " + table;
    queryString += " SET " + column;
    queryString += " WHERE " + condition;
    
    connection.query(queryString, function(err, result) {
      if(err) {
        throw err;
      }
      cb(result);
    })
  }
};

//Export orm
module.exports = orm;