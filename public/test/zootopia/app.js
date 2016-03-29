$(document).ready(function () {
    share.imgUrl = 'http://7vzsbb.com1.z0.glb.clouddn.com/7da489e449cb65d473162a2292096531?imageMogr/v2/thumbnail/300x300';
    share.desc='www.hothuati.com';
    updateShare(share);
    var randomsort = function (a, b) {
        return Math.random() > .5 ? -1 : 1;
        //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    }
    items = [
        {
            title: '兔子的眼睛是哪个紫色？',
            low_src:'http://7vzsbb.com1.z0.glb.clouddn.com/501a0d3ace6600b8c078bd431f0551a5.png?imageMogr/v2/thumbnail/60x60',
            middle_src:'http://7vzsbb.com1.z0.glb.clouddn.com/501a0d3ace6600b8c078bd431f0551a5.png?imageMogr/v2/thumbnail/300x300',
            high_src:'http://7vzsbb.com1.z0.glb.clouddn.com/501a0d3ace6600b8c078bd431f0551a5.png?imageMogr/v2/thumbnail/600x600',
            pic: 'http://7vzsbb.com1.z0.glb.clouddn.com/501a0d3ace6600b8c078bd431f0551a5.png?imageMogr/v2/thumbnail/600x600',
            answer: [
                {
                    title: '#8c6aa3',
                    value: '1'
                },
                {
                    title: '#ae77d4',
                    value: '0'
                },
                {
                    title: '#641e93',
                    value: '0'
                },
                {
                    title: '#b495c9',
                    value: '0'
                }
            ]
        },
        {
            title: '狐狸的领带是哪个蓝色？',
            low_src:'http://7vzsbb.com1.z0.glb.clouddn.com/56cb87e3fdd0ba6a0ae619092ef7b7b0.png?imageMogr/v2/thumbnail/60x60',
            middle_src:'http://7vzsbb.com1.z0.glb.clouddn.com/56cb87e3fdd0ba6a0ae619092ef7b7b0.png?imageMogr/v2/thumbnail/300x300',
            high_src:'http://7vzsbb.com1.z0.glb.clouddn.com/56cb87e3fdd0ba6a0ae619092ef7b7b0.png?imageMogr/v2/thumbnail/600x600',
            pic: 'http://7vzsbb.com1.z0.glb.clouddn.com/56cb87e3fdd0ba6a0ae619092ef7b7b0.png?imageMogr/v2/thumbnail/600x600',
            answer: [
                {
                    title: '#1c1a4b',
                    value: '1'
                },
                {
                    title: '#2c2971',
                    value: '0'
                },
                {
                    title: '#3e3c67',
                    value: '0'
                },
                {
                    title: '#0f0e24',
                    value: '0'
                }
            ]
        },
        {
            title: '树懒的眼皮是哪个棕色？',
            low_src:'http://7vzsbb.com1.z0.glb.clouddn.com/22bf8542b4be8112c38a7dd688b95258.png?imageMogr/v2/thumbnail/60x60',
            middle_src:'http://7vzsbb.com1.z0.glb.clouddn.com/22bf8542b4be8112c38a7dd688b95258.png?imageMogr/v2/thumbnail/300x300',
            high_src:'http://7vzsbb.com1.z0.glb.clouddn.com/22bf8542b4be8112c38a7dd688b95258.png?imageMogr/v2/thumbnail/600x600',
            pic: 'http://7vzsbb.com1.z0.glb.clouddn.com/22bf8542b4be8112c38a7dd688b95258.png?imageMogr/v2/thumbnail/600x600',
            answer: [
                {
                    title: '#856d60',
                    value: '1'
                },
                {
                    title: '#ba9987',
                    value: '0'
                },
                {
                    title: '#7a6b5b',
                    value: '0'
                },
                {
                    title: '#502d1d',
                    value: '0'
                }
            ]
        },
        {
            title: '豹子手机上的萝卜是哪个灰色？',
            low_src:'http://7vzsbb.com1.z0.glb.clouddn.com/5191822c056cb8960dfd61b30bf6084c.png?imageMogr/v2/thumbnail/60x60',
            middle_src:'http://7vzsbb.com1.z0.glb.clouddn.com/5191822c056cb8960dfd61b30bf6084c.png?imageMogr/v2/thumbnail/300x300',
            high_src:'http://7vzsbb.com1.z0.glb.clouddn.com/5191822c056cb8960dfd61b30bf6084c.png?imageMogr/v2/thumbnail/600x600',
            pic: 'http://7vzsbb.com1.z0.glb.clouddn.com/5191822c056cb8960dfd61b30bf6084c.png?imageMogr/v2/thumbnail/600x600',
            answer: [
                {
                    title: '#abaead',
                    value: '1'
                },
                {
                    title: '#8e9190',
                    value: '0'
                },
                {
                    title: '#d2d5d4',
                    value: '0'
                },
                {
                    title: '#868584',
                    value: '0'
                }
            ]
        },
        {
            title: '牛的名牌是哪个黄色？',
            low_src:'http://7vzsbb.com1.z0.glb.clouddn.com/17873ee8070e35083f4ab29eddfa1481.png?imageMogr/v2/thumbnail/60x60',
            middle_src:'http://7vzsbb.com1.z0.glb.clouddn.com/17873ee8070e35083f4ab29eddfa1481.png?imageMogr/v2/thumbnail/300x300',
            high_src:'http://7vzsbb.com1.z0.glb.clouddn.com/17873ee8070e35083f4ab29eddfa1481.png?imageMogr/v2/thumbnail/600x600',
            pic: 'http://7vzsbb.com1.z0.glb.clouddn.com/17873ee8070e35083f4ab29eddfa1481.png?imageMogr/v2/thumbnail/600x600',
            answer: [
                {
                    title: '#f3c94f',
                    value: '1'
                },
                {
                    title: '#f1d175',
                    value: '0'
                },
                {
                    title: '#f2b927',
                    value: '0'
                },
                {
                    title: '#cf980d',
                    value: '0'
                }
            ]
        },
        {
            title: '狮子的领带是哪个红色？',
            low_src:'http://7vzsbb.com1.z0.glb.clouddn.com/0fff59486dbaea356152c9f3a192bd09.png?imageMogr/v2/thumbnail/60x60',
            middle_src:'http://7vzsbb.com1.z0.glb.clouddn.com/0fff59486dbaea356152c9f3a192bd09.png?imageMogr/v2/thumbnail/300x300',
            high_src:'http://7vzsbb.com1.z0.glb.clouddn.com/0fff59486dbaea356152c9f3a192bd09.png?imageMogr/v2/thumbnail/600x600',
            pic: 'http://7vzsbb.com1.z0.glb.clouddn.com/0fff59486dbaea356152c9f3a192bd09.png?imageMogr/v2/thumbnail/600x600',
            answer: [
                {
                    title: '#55000d',
                    value: '1'
                },
                {
                    title: '#480610',
                    value: '0'
                },
                {
                    title: '#730716',
                    value: '0'
                },
                {
                    title: '#492126',
                    value: '0'
                }
            ]
        },
        {
            title: '水獭的包带是哪个黄色？',
            low_src:'http://7vzsbb.com1.z0.glb.clouddn.com/83259238a714d7be01bd7719d79cba73.png?imageMogr/v2/thumbnail/60x60',
            middle_src:'http://7vzsbb.com1.z0.glb.clouddn.com/83259238a714d7be01bd7719d79cba73.png?imageMogr/v2/thumbnail/300x300',
            high_src:'http://7vzsbb.com1.z0.glb.clouddn.com/83259238a714d7be01bd7719d79cba73.png?imageMogr/v2/thumbnail/600x600',
            pic: 'http://7vzsbb.com1.z0.glb.clouddn.com/83259238a714d7be01bd7719d79cba73.png?imageMogr/v2/thumbnail/600x600',
            answer: [
                {
                    title: '#fae273',
                    value: '1'
                },
                {
                    title: '#988b48',
                    value: '0'
                },
                {
                    title: '#977e37',
                    value: '0'
                },
                {
                    title: '#fbe995',
                    value: '0'
                }
            ]
        },
        {
            title: '夏奇羊脖子上较深的毛发是哪个黄色？',
            low_src:'http://7vzsbb.com1.z0.glb.clouddn.com/a741a1e47ab567fd4754a6a358d968fb.png?imageMogr/v2/thumbnail/60x60',
            middle_src:'http://7vzsbb.com1.z0.glb.clouddn.com/a741a1e47ab567fd4754a6a358d968fb.png?imageMogr/v2/thumbnail/300x300',
            high_src:'http://7vzsbb.com1.z0.glb.clouddn.com/a741a1e47ab567fd4754a6a358d968fb.png?imageMogr/v2/thumbnail/600x600',
            pic: 'http://7vzsbb.com1.z0.glb.clouddn.com/a741a1e47ab567fd4754a6a358d968fb.png?imageMogr/v2/thumbnail/600x600',
            answer: [
                {
                    title: '#e99444',
                    value: '1'
                },
                {
                    title: '#fdcc9f',
                    value: '0'
                },
                {
                    title: '#c26004',
                    value: '0'
                },
                {
                    title: '#977951',
                    value: '0'
                }
            ]
        },
    ];

    var all_items_length = items.length;//总题数
    var item_index = 0;//回答过的题目数
    var count = 0;//答对的数量
    var role = '';
    var role_face = '';
    var description = '';

    //动态头像
    var role_faces=[
        'http://7vzsbb.com1.z0.glb.clouddn.com/243227ffa2870a7a099174b46a1c9596.gif?imageMogr/v2/thumbnail/300x169',
        'http://7vzsbb.com1.z0.glb.clouddn.com/7cdfcb6531d11f83bbf3fa1e78eaaef1.gif?imageMogr/v2/thumbnail/300x170',
        'http://7vzsbb.com1.z0.glb.clouddn.com/f35adec51c1fa91f599580391cf18e00.gif?imageMogr/v2/thumbnail/300x170',
        'http://7vzsbb.com1.z0.glb.clouddn.com/5be12edf67fe3af0d2993d3f792f3552.gif?imageMogr/v2/thumbnail/300x170',
        'http://7vzsbb.com1.z0.glb.clouddn.com/3659ffec5072a6b485b0e3ea09cf1129.gif?imageMogr/v2/thumbnail/300x169',
        'http://img.users.51.la/18795734.asp'
    ];

    var retest = function () {
        //重新测试
        init();

    }
    var init = function () {
        //初始化
        all_items_length = items.length;//总题数
        item_index = 0;//回答过的题目数
        count = 0;//答对的数量
        //生成题目
        $('.items').html('');//清除dom
        //清除 结果
        $('#role').text('');
        $('#role_face').attr('src', '');
        $('#description').text('');
        //进度条设置为0
        $('.progress_bar').css('width', '0%');

        items = items.sort(randomsort);//随机排序
        items.map(function (item, page_item_index, items) {
            //题目
            var page_item = $('<div class="item"></div>');

            //设置id
            page_item.attr('id', 'page_item_' + page_item_index);

            //默认不可见
            page_item.css('display', 'none');


            var h2 = $('<h2></h2>');
            h2.text(item.title);
            h2.appendTo(page_item);


            //题目图片
            var pic = $('<img class="page_item_pic img_load">');


            //pic.attr('src', item.pic);
            pic.attr('low_src', item.low_src);
            pic.attr('middle_src', item.middle_src);
            pic.attr('high_src', item.high_src);

            //当前图片的序列
            pic.attr('number',page_item_index);
            pic.bind('load',function(){
                //重新计算 文字进度 的位置
                //多次执行，确保准确的位置
                $('.test_progress').css('marginTop',($('.test').height()-$('h2').height()-$('.page_item_pic').height()-$('.button_group').height()-20-20)/2+'px');

            });



            //按钮组
            var button_group = $('<div class="button_group"></div>');


            //循环答案 按钮

            item.answer = item.answer.sort(randomsort);//随机排序
            item.answer.map(function (answer_one, index, answer) {
                var button = $('<button class="select"></button>');
                button.css('backgroundColor', answer_one.title);
                button.attr('value', answer_one.value);

                //button 事件绑定
                button.bind('click', function () {
                    //禁用按钮，保证只能点击一次。
                    $(this).parent().find('button').attr('disabled', true);

                    //答过的题目＋1
                    item_index += 1;
                    //进度条设置为 item_index/all_items_length
                    $('.progress_bar').css('width', item_index / all_items_length * 100 + '%');


                    var next=function(){
                        //隐藏本题
                        $('#page_item_' + page_item_index).hide();

                        //如果是最后一道题
                        if (item_index === all_items_length) {
                            finish();
                        } else {
                            //不是最后一道题
                            //显示下一道题
                            $('#page_item_' + (page_item_index + 1)).show();
                            //显示文字进度
                            $('.test_progress').text((page_item_index + 2)+'/'+all_items_length);
                        }
                    }

                    var value = $(this).attr('value');
                    //转为数字
                    value = parseInt(value);

                    //判断是否正确

                    if (value === 1) {
                        //正确
                        count += value;
                        $(this).css('border', 'solid 2px #00ff30');

                        var btn=$(this);

                        setTimeout(function(){
                            btn.css('backgroundImage','url(http://7vzsbb.com1.z0.glb.clouddn.com/6bfce6b55f1909e963a2f2a970a979ae.png?imageMogr/v2/thumbnail/40x40)');
                            setTimeout(function(){
                                next();
                            },500);
                        },200);

                    } else {
                        $(this).css('border', 'solid 2px #f00');

                        var btn=$(this);
                        setTimeout(function(){
                            btn.css('backgroundImage','url(http://7vzsbb.com1.z0.glb.clouddn.com/18aa311f305d1755aaba2c040ee302e5.png?imageMogr/v2/thumbnail/40x40)');
                            setTimeout(function(){
                                next();
                            },500);
                        },200);

                    }



                    //console.log('item_index:' + item_index);
                    //console.log('count:' + count);



                });
                //按钮加到按钮组
                button.appendTo(button_group);


            });




            //图片加到item
            pic.appendTo(page_item);
            //按钮组加到item
            button_group.appendTo(page_item);

            //按钮组阴影
            var button_group_shadow=$('<img>');
            button_group_shadow.css('float','left');
            button_group_shadow.css('width','98%');
            button_group_shadow.css('marginLeft','1%');
            button_group_shadow.attr('src','http://7vzsbb.com1.z0.glb.clouddn.com/5ce4df01352dfb73eff450d05dae4018.png?imageMogr/v2/thumbnail/642x28');
            button_group_shadow.appendTo(page_item);

            //添加题目
            page_item.appendTo($('.items'));
        });

        if (all_items_length > 1) {
            //如果有题目，显示第一个。
            $('#page_item_0').show();
            $('.test_progress').text(1+'/'+all_items_length);
        }

        $('.msg').hide();
        $('.welcome').hide();
        $('.test').show();

        //点击后开始异步加载png 和 gif
        role_faces.map(function(face,index,faces){
            var res=$('<div class="res"></div>');
            res.css('display','none');
            res.appendTo('body');

            var res_img=$('<img />');
            res_img.attr('src',face);
            res_img.appendTo(res);

        });


        //图片载入
        $('.img_load').each(function(index,item){
            var img=$(item).attr('src',$(item).attr('low_src'));
            $(item).attr('type','low');
            $('<img>').attr('src',$(this).attr('middle_src')).bind('load',function(){
                if(img.attr('type')==='low'){
                    img.attr('src',$(this).attr('src'));
                    img.attr('type','middle');
                }
            });
            $('<img>').attr('src',$(this).attr('high_src')).bind('load',function(){
                img.attr('src',$(this).attr('src'));
                img.attr('type','high');
            });
        });

    }
    $('.restart').bind('click', function () {
        retest();
    });

    var finish = function () {
        if (count == 8) {
            //答对8个
            role = '狐狸Nick！';
            role_face = role_faces[0];

            description = '观察敏锐，思维敏捷，总能第一时间发现问题。无论是生活，还是工作中，都被大家所称赞。就像狐狸Nick一样哦~';
            share.imgUrl ='http://7vzsbb.com1.z0.glb.clouddn.com/6978423df8c7791c3437324433364bdf?imageMogr/v2/thumbnail/300x300';

        }
        else if (count == 7 || count == 6) {
            //答对6-7个
            role = '兔子Judy！';
            role_face = role_faces[1];
            description = '虽然对颜色的判别还差了那么一点，但你也是行动力和辨别力极强的，就像兔子Judy一样耶！';
            share.imgUrl ='http://7vzsbb.com1.z0.glb.clouddn.com/7da489e449cb65d473162a2292096531?imageMogr/v2/thumbnail/300x300';

        }
        else if (count == 5 || count == 4) {
            //答对4-5个
            role = '牛局长！';
            role_face = role_faces[2];
            description = '考虑过多，更容易选错颜色哦？不如跟着感觉走，就像牛局长的口头禅 “Who cares”，说不定会更顺利哦。';
            share.imgUrl ='http://7vzsbb.com1.z0.glb.clouddn.com/f93e8a396da0fce9838e22e2219e58e4?imageMogr/v2/thumbnail/300x300';
        }
        else if (count == 3) {
            //答对3个
            role = '狮子市长！';
            role_face = role_faces[3];
            description = '看重大局的你怎么会在意颜色这种细节呢？不过也要小心不要被小羊副市长这样的人陷害了哦~';
            share.imgUrl ='http://7vzsbb.com1.z0.glb.clouddn.com/30e13c6d253fb61e8035d2f043fffe00?imageMogr/v2/thumbnail/300x300';
        }
        else if (count <= 2) {
            //答对0-2个
            role = '树懒Flash！';
            role_face = role_faces[4];
            description = '你对颜色的判别能力简直就像树懒一样，哈~~哈~~哈~~哈~~看过正确答案后，有没有恍~然~大~悟~的感觉呢？';
            share.imgUrl = 'http://7vzsbb.com1.z0.glb.clouddn.com/e4eac96642e1b5139fa63cea995b6222?imageMogr/v2/thumbnail/300x300';
        }


        $('#role').text(role);
        $('#description').text(description);
        $('#role_face').attr('src',role_face);
        $('.msg').show();
        $('.welcome').hide();
        $('.test').hide();


        //根据结果更新分享标题

        share.title='我竟然是疯狂动物城里的'+role+'！';
        updateShare(share);

    }

    //init();
    var res_welcome_bg=$('<img>');
    res_welcome_bg.bind('load',function(){
        $('.welcome').css('backgroundImage','url('+$(this).attr('src')+')');
    });
    res_welcome_bg.attr('src','http://7vzsbb.com1.z0.glb.clouddn.com/df10ac5385adbe751ea2281bf825bbb7.png?imageMogr/v2/thumbnail/750x1209');

});