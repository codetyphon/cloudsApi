$(document).ready(function(){
    $('.switch').bind('click',function(){
        console.log($(this).attr('switch'));
        switch ($(this).attr('switch')){
            case 'led_on':
                $.get('/led/on',function(){
                    get_led_status();
                });
                break;
            case 'led_off':
                $.get('/led/off',function(){
                    get_led_status();
                });
                break;
            case 'lamp_on':
                $.get('/lamp/on',function(){
                    get_lamp_status();
                });
                break;
            case 'lamp_off':
                $.get('/lamp/off',function(){
                    get_lamp_status();
                });
                break;
        }

    });

    var get_led_status=function(){
        $.get('/led',function(result){
            console.log(result);
            $('.switch[switch=led_on]').attr('class','switch weui_btn weui_btn_default');
            $('.switch[switch=led_off]').attr('class','switch weui_btn weui_btn_default');
            if(result==="status=on"){
                console.log('on');
                $('.switch[switch=led_on]').attr('class','switch weui_btn weui_btn_primary');
            }
            if(result==="status=off"){
                console.log('off');
                $('.switch[switch=led_off]').attr('class','switch weui_btn weui_btn_primary');

            }
        });
    }

    var get_lamp_status=function(){
        $.get('/lamp',function(result){
            console.log(result);
            $('.switch[switch=lamp_on]').attr('class','switch weui_btn weui_btn_default');
            $('.switch[switch=lamp_off]').attr('class','switch weui_btn weui_btn_default');
            if(result==="status=on"){
                console.log('on');
                $('.switch[switch=lamp_on]').attr('class','switch weui_btn weui_btn_primary');
            }
            if(result==="status=off"){
                console.log('off');
                $('.switch[switch=lamp_off]').attr('class','switch weui_btn weui_btn_primary');

            }
        });
    }

    get_led_status();
    get_lamp_status();


});