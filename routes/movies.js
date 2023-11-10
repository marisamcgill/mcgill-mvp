const express = require('express');
const router = express.Router();
const db = require("../model/helper");

router.get("/", async function(req, res, next) {
  try {
    const results = await db("SELECT * FROM movies;");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;


