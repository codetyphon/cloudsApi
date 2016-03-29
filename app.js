var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var api = require('./routes/api');
var user = require('./routes/user');
var users = require('./routes/users');
var json = require('./routes/json');
var wxapi = require('./routes/wxapi');
var work = require('./routes/work');//gongls:work

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(session({
    secret: 'login',
    store: new MongoStore({url: 'mongodb://localhost/snailpi'})
}));


app.use(function (req, res, next) {
    function getClientIp(req) {
        return req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
    }

    req.client_ip=getClientIp(req);

    if (req.url != '/api/view') {
        db.add('view', {
            host: req.headers.host,
            ip: getClientIp(req),
            ua: req.headers['user-agent'],
            url: req.url,
            method: req.method,
            time: Date()
        }, function () {

        });
    }
    //console.log(req.host);
    var site={};

    switch (req.host){
        case 'www.nickvpn.com':
            site.dir='nickvpn';
            site.logged_index='home';
            site.unlogged_index='signin';
            site.title='nick狐vpn加速器';
            site.subtitle='nick狐vpn加速器';
            break;
        case 'www.zootopiatimes.com':
            site.dir='zootopiatimes';
            site.logged_index='index';
            site.unlogged_index='index';
            site.title='疯狂动物城时报';
            site.subtitle='疯狂动物城官方报纸';
            break;
        case 'www.gongls.com':
            site.dir='gongls';
            site.logged_index='index';
            site.unlogged_index='index';
            site.title='gongls';
            site.subtitle='H5,game,and more';
            break;
        case 'www.lovelatter.cc':
            site.dir='crabpi';
            site.logged_index='index';
            site.unlogged_index='index';
            site.title='lovelatter';
            site.subtitle='lovelatter';
            break;
        case 'www.dobebox.com':
            site.dir='crabpi';
            site.logged_index='index';
            site.unlogged_index='index';
            site.title='dobebox';
            site.subtitle='dobebox';
            break;
        case 'www.bielu.net':
            site.dir='crabpi';
            site.logged_index='index';
            site.unlogged_index='index';
            site.title='别撸';
            site.subtitle='撸多了，对身体不好！';
            break;
        case 'www.zhiwuchaxun.com':
            site.dir='crabpi';
            site.logged_index='index';
            site.unlogged_index='index';
            site.title='植物查询';
            site.subtitle='几乎能找到一些植物';
            break;
        case 'www.crabpi.com':
            site.dir='crabpi';
            site.logged_index='index';
            site.unlogged_index='index';
            site.title='螃蟹派';
            site.subtitle='云主机';
            break;
        case 'www.bitchwho.com':
            site.dir='bitchwho';
            site.logged_index='home';
            site.unlogged_index='signin';
            site.title='碧池乎';
            site.subtitle='矫情的不一定都是贱人';
            break;
        default :
            site.dir='snailpi';
            site.logged_index='home';
            site.unlogged_index='signin';
            site.title='蜗牛派';
            site.subtitle='一站式物联网解决方案';
            /*
            site.dir='gongls';
            site.logged_index='index';
            site.unlogged_index='index';
            site.title='gongls';
            site.subtitle='html5 game and more';
            */
    }
    req.site=site;
    next();
});


app.use('/', index);
app.use('/api', api);
app.use('/user', user);
app.use('/users', users);
app.use('/json', json);
app.use('/work', work);
app.use('/wxapi', wxapi);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;

    res.render('404', {title: '404 你要访问的页面被狗吃了'});
    //next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
