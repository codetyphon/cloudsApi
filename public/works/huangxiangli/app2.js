$(document).ready(function(){
    share.imgUrl = 'http://www.gongls.com/works/huangxiangli/8.png';
    share.desc='蛰伏了许久，只等待着一个属于她的时间到来。就像一朵花，静候绽放。而现在，就是她的时间。';
    updateShare(share);
    
    
    var $link_work=$('<link rel="stylesheet" href="/stylesheets/work.css">');
    var $link=$('<link rel="stylesheet" href="/works/huangxiangli/style.css">');
    var $meta=$('<meta name="viewport" content="initial-scale=1.0,maximum-scale=1,user-scalable=no">');
    $link_work.appendTo($("iframe").contents().find("head"));
    $link.appendTo($("iframe").contents().find("head"));
    $meta.appendTo($("iframe").contents().find("head"));

    function stopScrolling( touchEvent ) { 
        touchEvent.preventDefault(); 
    } 
    //$('.gong').bind('touchstart',stopScrolling);
    $('.gong').bind('touchmove',stopScrolling);    
    $(document).bind('touchmove',stopScrolling);    
    $('.alert_pan').bind('touchmove',stopScrolling);    
    $('.alert').bind('touchmove',stopScrolling);    
    $('.alert_msg').bind('touchmove',stopScrolling);    
    $('iframe').bind('touchstart',function(){
        $('frame').focus();
    });    
    $('iframe').bind('touchmove',stopScrolling);    
    $('.welcome').bind('touchend',function(touchEvent){
        //$(this).slideUp("slow");
        touchEvent.preventDefault(); 
        $(this).animate({top:"-100%"});
        $('.gong').css('display','table');
    });

    function show(num){
        $('.alert').hide();
        $('.text').css('width',0);
        $('.text').css('height',0);
        $('.text').css('margin','auto');
        $('.alert_pan').show();
        $('.text').show();
        $('.text').find('.alert_msg').hide();
        $('.text').animate({width:"80%",height:"80%",margin:"auto"},function(){
            $(this).find('.alert_msg').show();
        });
        $("iframe").contents().find("body").html($('.text'+num).html());
    }
    $('.act1').bind('click',function(){
        show(1);
    });
    $('.act2').bind('click',function(){
        show(2);
    });
    $('.act3').bind('click',function(){
        show(3);
    });
    $('.act4').bind('click',function(){
        show(4);
    });
    $('.act5').bind('click',function(){
        show(5);
    });
    $('.act6').bind('click',function(){
        show(6);
    });
    $('.act7').bind('click',function(){
        show(7);
    });
    $('.act8').bind('click',function(){
        show(8);
    });
    $('.act9').bind('click',function(){
        show(9);
    });
    
    $('.alert_close').bind('click',function(){
        console.log($(this).parent().find('.alert_pan'));
        $(this).parent().animate({width:"0",height:"0"},function(){
            $(this).hide();
            $(this).parent().hide();
        });
    });
    //1）载入背景
    //2）logo旋转
    //3）背景模糊
    //4) 动效，9宫格图片出现。
    //5) 手指出动，出现一个过程，出现一个弹出框。框上面有关闭按钮。
    //6)
    //7)
    //8)
    
});