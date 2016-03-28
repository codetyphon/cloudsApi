var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('works/index',{title:'works'});
});
router.get('/tailand', function(req, res, next) {
  res.render('works/tailand/index',{title:'works'});
});
router.get('/tailand/index', function(req, res, next) {
  res.render('works/tailand/come_on_index',{title:'works'});
});
router.get('/tailand/join', function(req, res, next) {
  res.render('works/tailand/come_on_join',{title:'works'});
});
router.get('/tailand/share', function(req, res, next) {
  res.render('works/tailand/come_on_share',{title:'works'});
});
router.get('/tailand/des', function(req, res, next) {
  res.render('works/tailand/come_on_des',{title:'works'});
});

module.exports = router;
