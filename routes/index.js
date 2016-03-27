var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');
var ObjectId = require('mongodb').ObjectID;


/* GET home page. */
router.get('/', function (req, res, next) {
    var site=req.site;
    if (req.session.user) {
        res.render(site.dir+'/'+site.logged_index, {user: req.session.user, title: site.title, subtitle: site.subtitle});
    } else {
        res.render(site.dir+'/'+site.unlogged_index, {title: site.title, subtitle: site.subtitle});
    }
})

router.get('/signup', function (req, res, next) {
    var site=req.site;
    if (req.session.user) {
        res.render(site.dir+'/'+site.logged_index, {user: req.session.user, title: site.title, subtitle: site.subtitle});
    } else {
        res.render(site.dir+'/signup', {title: '注册'+site.title, subtitle: site.subtitle});
    }
});

router.get('/logout', function (req, res, next) {
    req.session.destroy(function (err) {
        res.redirect('/');
    })
});


router.get('/signin', function (req, res, next) {
    var site=req.site;
    if (req.session.user) {
        res.render(site.dir+'/'+site.logged_index, {user: req.session.user, title: site.title, subtitle: site.subtitle});
    } else {
        res.render(site.dir+'/signin', {title: '登陆'+site.title, subtitle: site.subtitle});
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

/* snailPi */
/*
 router.get('/devices', function (req, res, next) {
 //
 });
 router.get('/devices/create', function (req, res, next) {
 //
 });
 router.get('/devices/:id', function (req, res, next) {
 //
 });
 */
router.get('/switch', function (req, res, next) {
    //
    if (req.session.user) {
        db.get('switch', {onwer: req.session.user.fullname}, function (switch_arr) {
            res.render('snailpi/switch', {
                user: req.session.user,
                switch_arr: switch_arr,
                title: '蜗牛派 | 云开关',
                subtitle: '一站式物联网解决方案'
            });
        });
    } else {
        res.render('snailpi/signin', {title: '蜗牛派 | 云开关', subtitle: '一站式物联网解决方案'});
    }
});
router.get('/switch/create', function (req, res, next) {
    //
    if (req.session.user) {
        res.render('snailpi/switch_create', {user: req.session.user, title: '蜗牛派 | 云开关', subtitle: '一站式物联网解决方案'});
    }
});


router.get('/switch/:id', function (req, res, next) {
    var id = req.params.id;

    db.get_one('switch', {'_id': ObjectId(id)}, function (switch_obj) {
        res.render('snailpi/switch_info', {switch_obj: switch_obj, title: '蜗牛派 | 云开关', subtitle: '一站式物联网解决方案'});
    });

    //
});

router.get('/invite', function (req, res, next) {
    //邀请

});


router.get('/download', function (req, res, next) {
    res.render('snailpi/download', {user: req.session.user, title: '下载'});
});

router.get('/about', function (req, res, next) {

    var site=req.site;
    res.render(req.site.dir+'/about', {title: '关于'+req.site.title, subtitle: req.site.subtitle});

});

router.get('/upload', function (req, res, next) {
    res.render('upload', {title: 'upload'});
});
module.exports = router;
