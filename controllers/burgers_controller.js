var express = require('express');
var router = express.Router();

//Import burger.js model to use its database function
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgers_hbs = {
      burgers: data
    };
    console.log("burgers_hbs", burgers_hbs);
    // res.render("index", burgers_hbs);
  })
});

module.exports = router;