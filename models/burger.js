var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, value, cb) {
    orm.insertOne("burgers", cols, value, function(res) {
    console.log("cb", cb)

      cb(res);
    });
  },
  updateOne: function(cols, condition, cb) {
    orm.updateOne("burgers", cols, condition, function(res) {
      cb(res);
    });
  }
};


//Export database functions for controller
module.exports = burger;