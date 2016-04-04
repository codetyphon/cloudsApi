var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('works/test',{title:'works test'});
});
router.get('/zootopia', function(req, res, next) {
  res.render('works/zootopia/zootopia',{title:'zootopia'});
});

router.get('/cat', function(req, res, next) {
  res.render('works/cat',{title:'你认识几只猫?'});
});
module.exports = router;
