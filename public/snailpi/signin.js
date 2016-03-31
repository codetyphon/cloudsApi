$(document).ready(function(){
    $('.submit').bind('click',function(){

        var check=true;

        var submit=$(this);
        console.log('login begin');
        var fullname=$('.fullname').val().trim();
        var passwd=$('.passwd').val().trim();
        var text=$(this).text();

        if(fullname===''){
            $('.msg').text('用户名太短！');
            check=false;
        }

        else if(passwd.length<5){
            $('.msg').text('密码太短！');
            check=false;
        }

        if(check){
            $(this).text('正在登陆...');
            $(this).attr('disabled',true);
            $.post('/api/signin',{fullname:fullname,passwd:passwd},function(d){
                console.log(d);
                if(d.login===true){
                    submit.text('登陆成功，正在跳转...');
                    setTimeout(function(){
                        window.location.href='/';
                    },1000);
                }else{
                    submit.text('正在验证，请稍后...');
                    setTimeout(function(){
                        var background=submit.css('background');
                        submit.css('background','#f00');
                        var time=20;
                        submit.text('登陆失败（'+time+'）秒后继续 ');
                        var time_handler=setInterval(function(){
                            time-=1;
                            submit.text('登陆失败（'+time+'）秒后继续 ');
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