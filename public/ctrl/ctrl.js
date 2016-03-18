$(document).ready(function () {
    var state_change_finish = function () {
        $('#toast').show();
        setTimeout(function () {
            $('#toast').hide();
        }, 1000);
    };
    $('.switch').bind('click', function () {
        console.log($(this).attr('switch'));
        var $btn = $(this);
        switch ($btn.attr('switch')) {
            case 'led_on':
                $btn.text('正在打开');
                $.get('/led/on', function () {
                    get_led_status();
                    state_change_finish();
                });
                break;
            case 'led_off':
                $btn.text('正在关闭');
                $.get('/led/off', function () {
                    get_led_status();
                    state_change_finish();
                });
                break;
            case 'lamp_on':
                $btn.text('正在打开');
                $.get('/lamp/on', function () {
                    get_lamp_status();
                    state_change_finish();
                });
                break;
            case 'lamp_off':
                $btn.text('正在关闭');
                $.get('/lamp/off', function () {
                    get_lamp_status();
                    state_change_finish();
                });
                break;
        }

    });
    var get_led_status = function () {
        $.get('/led', function (result) {
            console.log(result);
            $('.switch[switch=led_on]').attr('class', 'switch weui_btn weui_btn_default');
            $('.switch[switch=led_off]').attr('class', 'switch weui_btn weui_btn_default');
            if (result === "status=on") {
                console.log('on');
                $('.switch[switch=led_on]').attr('class', 'switch weui_btn weui_btn_primary');
                $('.switch[switch=led_on]').text('led on');
            }
            if (result === "status=off") {
                console.log('off');
                $('.switch[switch=led_off]').attr('class', 'switch weui_btn weui_btn_primary');
                $('.switch[switch=led_off]').text('led off');

            }
        });
    };
    var get_lamp_status = function () {
        $.get('/lamp', function (result) {
            console.log(result);
            $('.switch[switch=lamp_on]').attr('class', 'switch weui_btn weui_btn_default');
            $('.switch[switch=lamp_off]').attr('class', 'switch weui_btn weui_btn_default');
            if (result === "status=on") {
                console.log('on');
                $('.switch[switch=lamp_on]').attr('class', 'switch weui_btn weui_btn_primary');
                $('.switch[switch=lamp_on]').text('lamp on');
            }
            if (result === "status=off") {
                console.log('off');
                $('.switch[switch=lamp_off]').attr('class', 'switch weui_btn weui_btn_primary');
                $('.switch[switch=lamp_off]').text('lamp off');
            }
        });
    };
    get_led_status();
    get_lamp_status();
});