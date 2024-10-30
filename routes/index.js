var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница A320 */
router.get('/a320', function(req, res, next) {
  res.render('plane', {
  title: "Airbus A320",
  picture: "images/a320.png",
  desc: "Airbus A320 — семейство среднемагистральных узкофюзеляжных самолётов для авиалиний малой и средней протяжённости, разработанных европейским консорциумом «Airbus S.A.S». Выпущенный в 1988 году, он стал первым массовым пассажирским самолётом, на котором была применена электродистанционная система управления "
  });
  });
  /* Страница C5 */
router.get('/c5', function(req, res, next) {
  res.render('plane', {
  title: "Lockheed C5 Galaxy",
  picture: "images/c5.png",
  desc: "Lockheed C-5 Galaxy — американский тяжёлый военно-транспортный самолёт. Третий после Ан-225 и Ан-124 по грузоподъёмности грузовой самолёт в мире, и второй после Ан-124 по грузоподъёмности серийный грузовой самолёт."
  });
  });
  /* Страница Boeing 747 */
router.get('/boeing747', function(req, res, next) {
  res.render('plane', {
  title: "Boeing 747",
  picture: "images/boeing747.png",
  desc: "Boeing 747— четырёхдвигательный, первый в мире дальнемагистральный двухпалубный широкофюзеляжный пассажирский самолёт. Первый полёт был выполнен 9 февраля 1969 года. На момент своего создания Боинг 747 был самым большим, тяжёлым и вместительным пассажирским авиалайнером, оставаясь таковым в течение 36 лет, до появления A380, первый полёт которого состоялся в 2005 году."
  });
  });

module.exports = router;
