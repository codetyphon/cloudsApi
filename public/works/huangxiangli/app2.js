$(document).ready(function(){
    share.imgUrl = 'http://www.gongls.com/works/huangxiangli/8.png';
    share.desc='蛰伏了许久，只等待着一个属于她的时间到来。就像一朵花，静候绽放。而现在，就是她的时间。';
    updateShare(share);
    
    function stopScrolling( touchEvent ) { 
        touchEvent.preventDefault(); 
    } 
    document.addEventListener('touchstart',stopScrolling,false); 
    document.addEventListener('touchmove',stopScrolling,false); 
    
    $('.welcome').bind('touchend',function(){
        //$(this).slideUp("slow");
        $(this).animate({top:"-100%"});
        $('.gong').show();
    });
    $('.welcome').bind('click',function(){
        //$(this).slideUp("slow");
        $(this).animate({top:"-100%"});
        $('.gong').show();
    });
    function show(num){
        $('.alert').hide();
        $('.text'+num).css('width',0);
        $('.text'+num).css('height',0);
        $('.text'+num).css('margin','auto');
        $('.alert_pan').show();
        $('.text'+num).show();
        $('.text'+num).find('.alert_msg').hide();
        $('.text'+num).animate({width:"80%",height:"80%",margin:"auto"},function(){
            $(this).find('.alert_msg').show();
        });
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