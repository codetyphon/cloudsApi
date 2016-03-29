var express = require('express');
var router = express.Router();
var request = require('request');
var sign = require('../lib/sign.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('weixin api');
});

router.get('/sign', function(req, res, next) {
  //res.json(req.local.wxconfig);
  request('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx6a0490655d008b70&secret=70369747a6d0cbec973c86a47116ed7e', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body); // 打印google首页
      res.setHeader('Content-Type', 'text/json');
      res.send(body);
    }else{
      res.send(error);
    }
  })

});

router.get('/sign_2/:access_token', function(req, res, next) {
  var access_token=req.params.access_token;
  request('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+access_token+'&type=jsapi', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.setHeader('Content-Type', 'text/json');
      res.send(body);
    }else{
      res.send(error);
    }
  })
});

router.post('/sign_3', function (req, res, next) {
  var url=req.body.url;
  var jsapi_ticket=req.body.jsapi_ticket;
  var obj=sign(jsapi_ticket,url);
  res.setHeader('Content-Type', 'text/json');
  res.json(obj);
});

module.exports = router;
