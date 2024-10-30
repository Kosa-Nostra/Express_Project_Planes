var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница A320*/
router.get('/a320', function(req, res, next) {
  res.send("<h1>Airbus A320</h1>")
  });
  /* Страница C5*/
router.get('/c5', function(req, res, next) {
  res.send("<h1>C5 Galaxy</h1>")
  });
  /* Страница boeing 747*/
router.get('/boeing747', function(req, res, next) {
  res.send("<h1>Boeing 747</h1>")
  });

module.exports = router;
