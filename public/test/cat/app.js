$(document).ready(function () {
    share.imgUrl = 'http://www.gongls.com/test/cat/img/1.jpeg';
    share.desc='www.hothuati.com';
    updateShare(share);
    var randomsort = function (a, b) {
        return Math.random() > .5 ? -1 : 1;
        //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    }
    cats=[
        {name:'暹罗猫',face:0},
        {name:'布偶猫',face:1},
        {name:'苏格兰折耳猫',face:2},
        {name:'英国短毛猫',face:3},
        {name:'波斯猫',face:4},
        {name:'俄罗斯蓝猫',face:5},
        {name:'美国短毛猫',face:6},
        {name:'异国短毛猫',face:7},
        {name:'挪威森林猫',face:8},
        {name:'孟买猫',face:9},
        {name:'缅因猫',face:10},
        {name:'埃及猫',face:11},
        {name:'伯曼猫',face:12},
        {name:'斯芬克斯猫',face:13},
        {name:'缅甸猫',face:14},
        {name:'阿比西尼亚猫',face:15},
        {name:'新加坡猫',face:16},
        {name:'索马里猫',face:17},
        {name:'土耳其梵猫',face:18},
        {name:'中国狸花猫',face:19},
        {name:'美国短尾猫',face:20}
    ];
    
    function get_random_cats_without_cat(cats,return_number){
        var arr=[];
        for(i=0;i<return_number;i++){
            
            var cat=cats.sort(randomsort)[0];
            if(cats.indexOf(cat)!=-1){
                console.log(cat);
            }
        }
    }
    
    $('.restart').click(function(){
        $('.test').html('');
        count=0;

        $('.btns').html('');
        
        cats=cats.sort(randomsort);
        
        cats.map(function(cat,index,cats){
            if(index<=10){
                var weui_msg=$('<div class="weui_msg items"></div>');
                weui_msg.attr('id','item_'+index);
                weui_msg.hide();
                var weui_text_area=$('<div class="weui_text_area"><p class="weui_msg_desc">这只猫是什么猫？</p></div>');
                var weui_icon_area=$('<div class="weui_icon_area"></div>');
                var img=$('<img>');
                img.attr('src','/test/cat/img/'+cat.face+'.jpeg');
                img.appendTo(weui_icon_area);
                weui_text_area.appendTo(weui_msg);
                weui_icon_area.appendTo(weui_msg);
                
                
                var weui_opr_area=$('<div class="weui_opr_area"></div>');
                var weui_btn_area=$('<div class="weui_btn_area"></div>');
                weui_btn_area.appendTo(weui_opr_area);
                
                    //div.weui_opr_area
                    //div.weui_btn_area.btns
                var btns=[];
                btns.push({title:cat.name,value:1});
                
                function get_cat(){
                    getcat=cats.sort(randomsort)[0];
                    if(cat===getcat){
                        return get_cat();
                    }else{
                        return getcat;
                    }
                }
                var gc=get_cat();

                
                btns.push({title:gc.name,value:0});
                //btns.push({title:cat.name,value:0});

                btns=btns.sort(randomsort);

                btns.map(function(btn,btn_index,btns){
                    $btn=$('<button class="weui_btn weui_btn_default"></button>');
                    if(index===10){
                        $btn.attr('next',"#over");
                    }else{
                        var num=index+1;
                        $btn.attr('next','#item_'+num);
                    }
                    $btn.text(btn.title);
                    $btn.attr('value',btn.value);
                    $btn.click(function(){
                        $('.items').hide();
                        if($(this).attr('value')==='1'){
                            count+=1;
                            $('.count').text(count);
                            share.title='我认识'+count+'只猫,不服来战！'
                            updateShare(share);
                            
                            console.log('ok');
                        }else if($(this).attr('value')==='0'){
                            console.log('err');

                        }
                        $($(this).attr('next')).show();
                    });
                    $btn.appendTo(weui_btn_area);
                });
                weui_opr_area.appendTo(weui_msg);
                weui_msg.appendTo($('.test'));
                //
            }
        });
        $('#over').hide();
        $('#item_1').show();
        
        /*
        
        
        */
        
    });
    $('.restart').click();
});