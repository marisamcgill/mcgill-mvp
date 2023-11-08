const express = require('express');
const router = express.Router();
const db = require("../model/helper");

router.get("/", function(req, res, next) {
  db("SELECT * FROM movies;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;


