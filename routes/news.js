var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/ma', function(req, res, next) {
  res.render('news', {title: '热门话题马金男：新闻客户端领域还有没有创业机会？'});
});
module.exports = router;
