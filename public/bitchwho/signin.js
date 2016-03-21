$(document).ready(function(){
    $('.submit').bind('click',function(){
        console.log('login begin');
        var fullname=$('.fullname').val();
        var passwd=$('.passwd').val();
        $.post('/api/signin',{fullname:fullname,passwd:passwd},function(d){
            if(d.login){
                location.href='/';
            }
        });
    });
});