var express = require('express');
var router = express.Router();

//Import burger.js model to use its database function
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    
    // console.log("data", data);
    res.render("index", {data: data});
  })
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne("burger_name", [req.body.name], function(result) {
    res.json({ id: result.insertId });
  });
})

module.exports = router;