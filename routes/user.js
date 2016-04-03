var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');
var ObjectId = require('mongodb').ObjectID;
/* GET users listing. */
router.get('/', function (req, res, next) {
    var site = req.site;
    if (req.session.user) {
        res.render(site.dir + '/user', {user: req.session.user, title: site.title, subtitle: site.subtitle});
    } else {
        res.render(site.dir + '/' + site.unlogged_index, {title: site.title, subtitle: site.subtitle});
    }
});

router.get('/face', function (req, res, next) {
    res.render('snailpi/user_face', {user: req.session.user, title: 'user face'});
});

router.get('/invite', function (req, res, next) {
    var site = req.site;
    //



    if (req.session.user) {
        var fullname=req.session.user.fullname;



        function randomString(len) {
            len = len || 32;
            var $chars = 'ABCDEFGHJKMNPQRSTWXYZ235678';
            /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
            var maxPos = $chars.length;
            var pwd = '';
            for (i = 0; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        }



        function get_a_invite(users){
            var invite = randomString(5);

            db.getCount('users', {invite: invite}, function (count) {
                if(count===0){
                    db.update('users',{fullname:fullname},{invite:invite},function(){
                        req.session.user.invite=invite;
                        res.render(site.dir + '/invite', {host:req.host,invite_users:users,invite:invite,user: req.session.user, title: site.title, subtitle: site.subtitle});
                    });
                }else{
                    get_a_invite();
                }
            });
        }
        db.get('users',{master:fullname},function(users){
            if(req.session.user.invite===undefined){
                get_a_invite(users);
            }else{
                var invite=req.session.user.invite;
                res.render(site.dir + '/invite', {host:req.host,invite_users:users,invite:invite,user: req.session.user, title: site.title, subtitle: site.subtitle});
            }
        });

    } else {
        res.render(site.dir + '/' + site.unlogged_index, {title: site.title, subtitle: site.subtitle});
    }
});

module.exports = router;
