const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Which Robert De Niro Movie?' });
});

module.exports = router;
