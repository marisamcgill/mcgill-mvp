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

/* GET random movie by genre */
// router.get("/:genre", function (req, res, next) {
//   const { genre } = req.params.genre;
//   db(`SELECT * FROM movies WHERE MovieGenre LIKE "%${genre}%" ORDER BY RAND() LIMIT 1;`)
//   .then(results => {
//     res.send(results.data[0]);
//   })
//   .catch(err => res.status(500).send(err));
// })

router.get("/:genre", async function(req, res, next) {
  let genre = req.params.genre;
  console.log(genre);
  let sql = `SELECT * FROM movies WHERE MovieGenre LIKE "%${genre}%" ORDER BY RAND() LIMIT 1;`
 
   try {
     let results = await db(sql);
     let genre = results.data;
     res.send(genre);
   } catch (err) {
     res.status(500).send({ error: err.message });
   }
 });

module.exports = router;


