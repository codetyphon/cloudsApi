var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var site=req.site;
  console.log('session:'+req.session.user);
  if (req.session.user) {
    res.render(site.dir+'/user', {user: req.session.user, title: site.title, subtitle: site.subtitle});
  } else {
    res.render(site.dir+'/'+site.unlogged_index, {title: site.title, subtitle: site.subtitle});
  }
});

router.get('/face', function(req, res, next) {
  res.render('user',{user:req.session.user,title:'user center'});
});

router.get('/invite', function (req, res, next) {
  //邀请
  res.render('user/invite',{user:req.session.user,title:'user center'});
});

module.exports = router;
