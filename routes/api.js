var express = require('express');
var md5 = require('md5');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var db = require('../lib/db.js');
var ObjectId = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/test', function (req, res, next) {
    //console.log(req.headers);
    res.json({
        ip: req.headers.host,
        ua: req.headers['user-agent'],
        url: req.url,
        method: req.method,
        time: Date()
    });

});

router.get('/view', function (req, res, next) {
    //console.log(req.headers);
    db.getCount('view', {}, function (count) {
        res.json({
            view: count
        });
    });
});
router.get('/view_url', function (req, res, next) {
     var url = req.query.url;
    //console.log(req.headers);
    db.get('view',{url:url},function(result){
        res.json(result);
    });
});

router.post('/reg/:fullname', function (req, res, next) {
    var fullname = req.params.fullname;
});

router.post('/signin', function (req, res, next) {
    //res.session.user='wb';
    var fullname = req.body.fullname;
    var passwd = req.body.passwd;
    //res.json({fullname:fullname,passwd:passwd});

    db.get_one('users', {fullname: fullname}, function (result) {
        if (result) {
            if (result.passwd === passwd) {
                req.session.user = result;
                res.json({login: true});
            } else {
                res.json({login: false});
            }
        } else {
            res.json({login: false});
        }

    });
});

router.post('/signup', function (req, res, next) {
    //res.session.user='wb';
    var fullname = req.body.fullname;
    var passwd = req.body.passwd;
    var invite = req.body.invite;
    //res.json({fullname:fullname,passwd:passwd});

    db.getCount('users',{fullname: fullname},function(count){
        if(count===0){
            db.get_one('users',{invite:invite},function(user){
                if(user===undefined){
                    res.json({err: true,msg:'邀请码不存在！'});
                }else{
                    //
                    var master=user.fullname;
                    var time=Date();
                    ip=req.client_ip;
                    db.add('users',{face:'/images/default_face.png',fullname: fullname,passwd:passwd,master:master,register_time:time,register_ip:ip},function(user){
                        if(user.err){
                            res.json({err: true,msg:'注册失败！'});
                        }else{
                            res.json({err: false,msg:'注册成功！'});
                        }
                    });
                }
            });
        }else{
            res.json({err: true,msg:'用户名已经存在！'});
        }
    });
});

router.post('/switch/create', function (req, res, next) {
    //create a switch
    if (req.session.user) {
        var name=req.body.name;

        //检查 该用户 创建的 开关 数量
        db.getCount('switch',{onwer:req.session.user.fullname},function(count){
            if(count<=3){
                var time=Date();
                db.add('switch',{onwer:req.session.user.fullname,name:name,time:time,status:'off'},function(id){
                    res.json({err:false,msg:'添加成功',switch_id:id});
                });
            }else{
                res.json({err:true,msg:'你的开关数量已经达到上限，如需要突破数量，何不升级成vip?'});
            }
        });
    }else{
        res.json({err:true,msg:'your are not login'});
    }
});

router.get('/switch/:id', function (req, res, next) {
    var id=req.params.id;
    db.get_one('switch',{'_id':ObjectId(id)},function(switch_obj){
        res.json({status:switch_obj.status});
    });

    //
});

router.get('/switch_all_count', function (req, res, next) {
    db.getCount('switch', {}, function (count) {
        res.json({
            view: count
        });
    });
});

router.get('/user_all_count', function (req, res, next) {
    db.getCount('users', {}, function (count) {
        res.json({
            view: count
        });
    });
});


/* switch on/off */
router.get('/switch/:id/on', function (req, res, next) {
    var id=req.params.id;
    if (req.session.user) {
        db.get_one('switch',{'_id':ObjectId(id)},function(switch_one){
            if(req.session.user.fullname===switch_one.onwer){
                db.update('switch',{'_id':ObjectId(id)},{status:'on'},function(result){
                    result.err=false;
                    res.json(result);
                });
            }else{
                res.json({err:true,msg:'u are not onwer'});
            }
        });
    }else{
        res.json({err:true,msg:'u are not login'});
    }
});
router.get('/switch/:id/off', function (req, res, next) {
    var id=req.params.id;
    if (req.session.user) {
        db.get_one('switch',{'_id':ObjectId(id)},function(switch_one){
            if(req.session.user.fullname===switch_one.onwer){
                db.update('switch',{'_id':ObjectId(id)},{status:'off'},function(result){
                    result.err=false;
                    res.json(result);
                });
            }else{
                res.json({err:true,msg:'u are not onwer'});
            }
        });
    }else{
        res.json({err:true,msg:'u are not login'});
    }
});
router.post('/change_user_face', function (req, res, next) {
    var face_url=req.body.face_url;
    if (req.session.user) {
        console.log(req.session.user);
        db.update('users',{'_id':ObjectId(req.session.user._id)},{face:face_url},function(result){
                    result.err=false;
                    req.session.user.face=face_url;
                    res.json(result);
        });
    }else{
        res.json({err:true,msg:'not login'});
    }
    
});
router.post('/uploadimg', function (req, res, next) {
    //
    if (req.session.user) {
        var formidable = require("formidable");
    var form = new formidable.IncomingForm();   //创建上传表单
    form.parse(req, function (err, fields, files) {
        var imgs = [];
        for (var key in files) {
            var file = files[key];
            //var fName = (new Date()).getTime();
            var fName = md5(fs.readFileSync(file.path));

            switch (file.type) {
                case "image/jpeg":
                    fName = fName + ".jpg";
                    break;
                case "image/png":
                    fName = fName + ".png";
                    break;
                default :
                    fName = fName + ".png";
                    break;
            }
            var uploadDir = path.resolve('public', 'upload', fName);

            imgs.push(fName);

            fs.rename(file.path, uploadDir, function (err) {
                if (err) {
                    //res.json(err);
                } else {

                }
            });
        }
        res.json({err:false,imgs:imgs});
    });
    }else{
        res.json({err:true,msg:'not login'});
    }
    
});
module.exports = router;
