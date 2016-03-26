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

router.post('/uploadimg', function (req, res, next) {
    //

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
                    res.json(err);
                } else {

                }
            });
        }
        res.json(imgs);
    });
});
module.exports = router;
