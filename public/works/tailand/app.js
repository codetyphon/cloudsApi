$(document).ready(function(){
    $('.imgloader').imgloader();
    /* page index */
    $('.btn_go_to_des').bind('click',function(){
        //in app
        //not login
        window.location.href='/work/tailand/des';

    });
    $('.btn_to_to_join').bind('click',function(){
        //in app
        //not login
        window.location.href='/work/tailand/join';
    });

    /* page join */
    //加油
    $('.check_invite').bind('click',function(){
        console.log('加油');

        var invite_code=$('.invite_code').val();

        console.log(invite_code);
        //alert_msg_for_check_invite(true,'haha');
        alert_msg_for_check_invite(false,'yes go to !');
    });
    //下载
    $('.download_app').bind('click',function(){
        console.log('下载');
    });
    //关闭弹出框
    $('.close_alert_pan').bind('click',function(){
        $('.alert_pan').hide();
    });
    //关闭弹出框 并跳转
    $('.close_and_goto_join').bind('click',function(){
        $('.alert_pan').hide();
        window.location.href='/work/tailand/des';
    });
    function alert_msg_for_check_invite(err,msg){
        $('.alert_pan').show();
        $('.check_invite_msg').text(msg);
        if(err){
            $('.close_and_goto').hide();
            $('.just_close').show();
        }else{
            $('.close_and_goto').show();
            $('.just_close').hide();
        }
    }


    /* page share */
    $('.goto_join_btn_from_share').bind('click',function(){
        //
        console.log('去加油');
        window.location.href='/work/tailand/join';
    });
    $('.get_more').bind('click',function(){
        //
        console.log('get_more');
    });




    /* page des */
    $('.btn_share_to_friends').bind('click',function(){
        //share to friends
        console.log('share to friends');
    });
});