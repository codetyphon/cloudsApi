$(document).ready(function(){
    $('.Switch').each(function(){
        var switch_id=$(this).attr('switch_id');
        var $switch=$(this);
        $.getJSON('/api/switch/'+switch_id,function(d){
            console.log(d.status);
            $switch.addClass(d.status);
        });
    });
    $('.Switch').click(function() {
        $(this).toggleClass('on').toggleClass('off');
        var switch_id=$(this).attr('switch_id');
        var url='';
        if($(this).attr('class').indexOf('off')!=-1){
            //
            console.log('off');
            url='/api/switch/'+switch_id+'/off';
        }
        if($(this).attr('class').indexOf('on')!=-1){
            //
            console.log('on');
            url='/api/switch/'+switch_id+'/on';
        }
        //console.log(url);
        $.getJSON(url,function(d){
            console.log(d);
        });
    });
});
