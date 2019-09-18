var express = require('express');
var router = express.Router();

//Import burger.js model to use its database function
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    
    console.log("data", data);
    res.render("index", {data: data});
  })
});

module.exports = router;