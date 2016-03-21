var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');


/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.host.indexOf('zootopiatimes.com') != -1) {
        res.render('zootopiatimes/index', {title: '疯狂动物城时报'});
    } else if (req.host.indexOf('gongls.com') != -1) {
        res.render('gongls/index', {title: 'gongls'});
    } else if (req.host.indexOf('lovelatter.cc') != -1) {
        res.render('lovelatter.cc/index', {title: '情书',domain:'www.lovelatter.cc'});
    } else if (req.host.indexOf('dobebox.com') != -1) {
        res.render('dobebox/index', {title: '逗比盒子',domain:'www.dobebox.com'});
    } else if (req.host.indexOf('bielu.net') != -1) {
        res.render('bielu/index', {title: '别撸',domain:'www.bielu.net'});
    } else if (req.host.indexOf('zhiwuchaxun.com') != -1) {
        res.render('zhiwuchaxun/index', {title: '植物查询',domain:'www.zhiwuchaxun.com'});
    } else if (req.host.indexOf('crabpi.com') != -1) {
        res.render('crabpi/index', {title: '螃蟹派 | 云主机'});
    } else if (req.host.indexOf('snailpi.com') != -1) {
        res.render('snailpi/index', {title: '蜗牛派｜一站式物联网解决方案 & 物联网培训 & 物联网和机器人的发烧友聚乐部', h1: '蜗牛派', h2: '一站式物联网解决方案'});
    } else if (req.host.indexOf('bitchwho.com') != -1) {
        res.render('bitchwho/index', {title: '碧池乎'});
    } else if (req.host.indexOf('nickvpn.com') != -1) {
        res.render('nickvpn/index', {title: 'nickVPN 疯狂动物城网络加速器'});
    } else {
        res.render('bitchwho/index', {title: '碧池乎',subtitle:'矫情的不一定都是贱人'});
    }
})

router.get('/signup', function (req, res, next) {
    if (req.host.indexOf('bitchwho.com') != -1) {
        res.render('bitchwho/signup', {title: '注册碧池乎'});
    } else if (req.host.indexOf('crabpi.com') != -1) {
        res.render('crabpi/signup', {title: '螃蟹派 | 云主机 ｜ 注册'});
    } else if (req.host.indexOf('snailpi.com') != -1) {
        res.render('snailpi/signup', {title: '蜗牛派｜注册', h1: '蜗牛派', h2: '一站式物联网解决方案'});
    } else {
        //res.render('404', {title: '你找的页面被狗吃了'});
        res.render('bitchwho/signup', {title: '注册碧池乎',subtitle:'矫情的不一定都是贱人'});
    }
});

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
    res.render('snailpi/ctrl', {title: '控制led和lamp'});
});

/* 历史遗留问题结束 */

router.get('/download', function (req, res, next) {
    res.render('download', {title: '控制led和lamp'});
});

router.get('/about', function (req, res, next) {
    res.render('about', {title: 'about'});
});
module.exports = router;
