$(document).ready(function(){
    share.imgUrl = 'http://www.gongls.com/works/huangxiangli/8.png';
    share.desc='蛰伏了许久，只等待着一个属于她的时间到来。就像一朵花，静候绽放。而现在，就是她的时间。';
    updateShare(share);
    
    
    $('.welcome').bind('click',function(){
        //$(this).slideUp("slow");
        $(this).animate({top:"-100%"});
    });
    
    $('.act1').bind('click',function(){
        $('.alert').hide();
        $('.text1').show();
        $('.alert_pan').show();
    });
    $('.act2').bind('click',function(){
        $('.alert').hide();
        $('.text2').show();
        $('.alert_pan').show();
    });
    $('.act3').bind('click',function(){
        $('.alert').hide();
        $('.text3').show();
        $('.alert_pan').show();
    });
    $('.act4').bind('click',function(){
        $('.alert').hide();
        $('.text4').show();
        $('.alert_pan').show();
    });
    $('.act5').bind('click',function(){
        $('.alert').hide();
        $('.text5').show();
        $('.alert_pan').show();
    });
    $('.act6').bind('click',function(){
        $('.alert').hide();
        $('.text6').show();
        $('.alert_pan').show();
    });
    $('.act7').bind('click',function(){
        $('.alert').hide();
        $('.text7').show();
        $('.alert_pan').show();
    });
    $('.act8').bind('click',function(){
        $('.alert').hide();
        $('.text8').show();
        $('.alert_pan').show();
    });
    $('.act9').bind('click',function(){
        $('.alert').hide();
        $('.text9').show();
        $('.alert_pan').show();
    });
    
    $('.alert_close').bind('click',function(){
        $('.alert_pan').hide();
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