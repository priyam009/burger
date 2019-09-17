var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cb) {
    orm.insertOne("burgers", cols, value, function(res) {
      cb(res);
    });
  },
  updateOne: function(cb) {
    orm.updateOne("burgers", cols, condition, function(res) {
      cb(res);
    });
  }
};


//Export database functions for controller
module.exports = burger;