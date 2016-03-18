$(document).ready(function(){
    $('button.close').bind('click',function(){
        $(this).parent().hide();
    });
});