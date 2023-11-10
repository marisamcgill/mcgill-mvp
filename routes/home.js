const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Which Robert De Niro Movie?' });
});

/* GET random movie */
// router.get("/", function (req, res, next) {
//   const { genre, time, year } = req.query;
//   db("SELECT * FROM movies WHERE genre LIKE "%${genre}%" AND duration < "%${time}%" AND year LIKE "%${year}%" ORDER BY RAND() LIMIT 1;")
//   .then(results => {
//     res.send(results.data[0]);
//   })
//   .catch(err => res.status(500).send(err));
// })

//need to convert results into correct values for the select function
//e.g. '1980s' answer = >= 1980 && >= 1989
//e.g. 'Up to 90 minutes" <= 90