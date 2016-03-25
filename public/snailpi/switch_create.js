$(document).ready(function(){
    $('.switch_submit_btn').bind('click',function(){
        var name=$('.name').val();
        name=name.trim();
        if(name===''){
            $('.name').css('border','solid 2px #f00');
            $('.name').attr('placeholder','请输入开关名称');
        }else{
            $btn=$(this);
            $btn.text('正在创建，请稍后...');
            $btn.attr('disabled',true);
            $.post('/api/switch/create',{name:name},function(d){
                console.log(d);
                $btn.removeAttr('disabled');
            });
        }

    });
});
