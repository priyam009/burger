var express = require('express');
var router = express.Router();

//Import burger.js model to use its database function
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObj = {
      burgers: data
    };
    
    // console.log("data", data);
    res.render("index", hbsObj);
  })
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne("burger_name", [req.body.name], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  var cols = "devoured = " + req.body.devoured;

  burger.updateOne(cols, condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  })
})



module.exports = router;