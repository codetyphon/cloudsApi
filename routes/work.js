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

router.get('/huangxiangli', function(req, res, next) {
  res.render('works/huangxiangli',{title:'剪了短发后，黄湘丽的人生开了挂'});
});

router.get('/huangxiangli2', function(req, res, next) {
  res.render('works/huangxiangli2',{title:'剪了短发后，黄湘丽的人生开了挂'});
});

module.exports = router;
