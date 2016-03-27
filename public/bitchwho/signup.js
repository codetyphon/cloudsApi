$(document).ready(function(){
    $('.submit').bind('click',function(){
        var check=true;

        var submit=$(this);
        console.log('login begin');
        var fullname=$('.fullname').val().trim();
        var passwd=$('.passwd').val().trim();
        var invite=$('.invite').val().trim();
        var text=$(this).text();

        if(fullname===''){
            $('.msg').text('用户名太短！');
            check=false;
        }

        else if(passwd.length<5){
            $('.msg').text('密码太短！');
            check=false;
        }

        else if(invite===''){
            $('.msg').text('请填写邀请码！');
            check=false;
        }

        else if(invite.length!='5'){
            $('.msg').text('邀请码位数不对！');
            check=false;
        }



        if(check){
            $(this).text('正在注册...');
            $(this).attr('disabled',true);
            $.post('/api/signup',{fullname:fullname,passwd:passwd,invite:invite},function(d){
                console.log(d);
                if(!d.err){
                    submit.text('注册成功，正在跳转...');
                    setTimeout(function(){
                        window.location.href='/';
                    },1000);
                }else{
                    $('.msg').text(d.msg);
                    submit.text('正在注册，请稍后...');
                    setTimeout(function(){
                        var background=submit.css('background');
                        submit.css('background','#f00');
                        var time=20;
                        submit.text('注册失败（'+time+'）秒后继续 ');
                        var time_handler=setInterval(function(){
                            time-=1;
                            submit.text('注册失败（'+time+'）秒后继续 ');
                            if(time==0){
                                submit.removeAttr('disabled');
                                submit.text(text);
                                submit.css('background',background);
                                clearInterval(time_handler);
                            }
                        },1000);
                    },1000);
                }
            });
        }

    });
});