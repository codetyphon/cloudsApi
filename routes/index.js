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
        res.render('lovelatter.cc/index', {title: '情书', domain: 'www.lovelatter.cc'});
    } else if (req.host.indexOf('dobebox.com') != -1) {
        res.render('dobebox/index', {title: '逗比盒子', domain: 'www.dobebox.com'});
    } else if (req.host.indexOf('bielu.net') != -1) {
        res.render('bielu/index', {title: '别撸', domain: 'www.bielu.net'});
    } else if (req.host.indexOf('zhiwuchaxun.com') != -1) {
        res.render('zhiwuchaxun/index', {title: '植物查询', domain: 'www.zhiwuchaxun.com'});
    } else if (req.host.indexOf('crabpi.com') != -1) {
        res.render('crabpi/index', {title: '螃蟹派 | 云主机'});
    } else if (req.host.indexOf('snailpi.com') != -1) {
        if (req.session.user) {
            res.render('snailpi/home', {title: '蜗牛派', subtitle: '一站式物联网解决方案'});
        } else {
            res.render('snailpi/signin', {title: '蜗牛派', subtitle: '一站式物联网解决方案'});
        }
    } else if (req.host.indexOf('nickvpn.com') != -1) {
        if (req.session.user) {
            res.render('nickvpn/index', {title: 'nickVPN 疯狂动物城网络加速器'});
        } else {
            res.render('nickvpn/signin', {title: 'nickVPN 疯狂动物城网络加速器'});
        }

    } else if (req.host.indexOf('bitchwho.com') != -1) {
        if (req.session.user) {
            res.render('bitchwho/home', {title: '碧池乎', subtitle: '矫情的不一定都是贱人'});
        } else {
            res.render('bitchwho/signin', {title: '碧池乎', subtitle: '矫情的不一定都是贱人'});
        }
    } else {
        /*
        if (req.session.user) {
            res.render('bitchwho/home', {title: '碧池乎', subtitle: '矫情的不一定都是贱人'});
        } else {
            res.render('bitchwho/signin', {title: '碧池乎', subtitle: '矫情的不一定都是贱人'});
        }
        */

        if (req.session.user) {
            res.render('snailpi/home', {title: '蜗牛派', subtitle: '一站式物联网解决方案'});
        } else {
            res.render('snailpi/signin', {title: '蜗牛派', subtitle: '一站式物联网解决方案'});
        }
        
        /*
        if (req.session.user) {
            res.render('nickvpn/index', {title: 'nickVPN 疯狂动物城网络加速器'});
        } else {
            res.render('nickvpn/signin', {title: 'nickVPN 疯狂动物城网络加速器'});
        }
        */
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
        res.render('bitchwho/signup', {title: '注册碧池乎', subtitle: '矫情的不一定都是贱人'});
    }
});

router.get('/logout', function (req, res, next) {
    //req.session.destroy();
    req.session.destroy(function (err) {
        res.redirect('/');
    })
});

router.post('/api/signin', function (req, res, next) {
    //res.session.user='wb';
    var fullname = req.body.fullname;
    var passwd = req.body.passwd;
    //res.json({fullname:fullname,passwd:passwd});

    db.get_one('users', {fullname: fullname}, function (result) {
        if (result) {
            if (result.passwd === passwd) {
                req.session.user = 'wb';
                res.json({login: true});
            } else {
                res.json({login: false});
            }
        } else {
            res.json({login: false});
        }

    });


});

router.post('/api/test', function (req, res, next) {
    res.json(req.session.user);
});

router.post('/api/reg/:fullname', function (req, res, next) {
    var fullname = req.params.fullname;
});

router.get('/signin', function (req, res, next) {
    if (req.host.indexOf('bitchwho.com') != -1) {
        res.render('bitchwho/signin', {title: '注册碧池乎'});
    } else if (req.host.indexOf('crabpi.com') != -1) {
        res.render('crabpi/signin', {title: '螃蟹派 | 云主机 ｜ 登陆'});
    } else if (req.host.indexOf('snailpi.com') != -1) {
        res.render('snailpi/signin', {title: '蜗牛派｜登陆', h1: '蜗牛派', h2: '一站式物联网解决方案'});
    } else {
        //res.render('404', {title: '你找的页面被狗吃了'});
        res.render('bitchwho/signin', {title: '登陆碧池乎', subtitle: '矫情的不一定都是贱人'});
    }
});

router.get('/home', function (req, res, next) {
    if (req.host.indexOf('bitchwho.com') != -1) {
        res.render('bitchwho/home', {title: '碧池乎'});
    } else if (req.host.indexOf('crabpi.com') != -1) {
        res.render('crabpi/home', {title: '螃蟹派 | 云主机'});
    } else if (req.host.indexOf('snailpi.com') != -1) {
        res.render('snailpi/home', {title: '蜗牛派', h1: '蜗牛派', h2: '一站式物联网解决方案'});
    } else {
        //res.render('404', {title: '你找的页面被狗吃了'});
        res.render('bitchwho/home', {title: '碧池乎', subtitle: '矫情的不一定都是贱人'});
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
