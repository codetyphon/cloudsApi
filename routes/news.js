var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/ma', function(req, res, next) {
  res.render('news', {title: '热门话题马金男：新闻客户端领域还有没有创业机会？'});
});
router.get('/ma2', function(req, res, next) {
  res.render('news/ma2', {title: '热门话题CEO独家回应“逼宫门”：带队出走是句玩笑话！'});
});
module.exports = router;
