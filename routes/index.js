var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.host.indexOf('zootopiatimes.com') != -1) {
        res.render('zndex', {title: 'zootopia times'});
    } else {
        res.render('index', {title: '蜗牛派｜一站式物联网解决方案 & 物联网培训 & 物联网和机器人的发烧友聚乐部', h1: '蜗牛派', h2: '一站式物联网解决方案'});
    }
})
;

/* 历史遗留问题 */

router.get('/led', function (req, res, next) {
    db.get_one('led_and_lamp', {}, function (result) {
        res.set("Content-type: text/plain");
        res.send(result.led_status);
    });
});

router.get('/led/on', function (req, res, next) {

    db.update('led_and_lamp', {}, {led_status: 'status=on'}, function (result) {
        res.set("Content-type: application/json");
        res.json(result);
    });
});

router.get('/led/off', function (req, res, next) {

    db.update('led_and_lamp', {}, {led_status: 'status=off'}, function (result) {
        res.set("Content-type: application/json");
        res.json(result);
    });
});

router.get('/lamp', function (req, res, next) {
    db.get_one('led_and_lamp', {}, function (result) {
        res.set("Content-type: text/plain");
        res.send(result.lamp_status);
    });
});

router.get('/lamp/on', function (req, res, next) {
    db.update('led_and_lamp', {}, {lamp_status: 'status=on'}, function (result) {
        res.set("Content-type: application/json");
        res.json(result);
    });
});

router.get('/lamp/off', function (req, res, next) {
    db.update('led_and_lamp', {}, {lamp_status: 'status=off'}, function (result) {
        res.set("Content-type: application/json");
        res.json(result);
    });
});

router.get('/ctrl', function (req, res, next) {
    res.render('ctrl', {title: '控制led和lamp'});
});

/* 历史遗留问题结束 */


module.exports = router;
